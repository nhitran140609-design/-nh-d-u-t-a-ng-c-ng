import React, { useState, useEffect } from 'react';
import { DrainPoint, FilterState, FloodSimulationParams, TinhTrang } from './types';
import { INITIAL_DRAIN_POINTS } from './data/initialPoints';
import { exportPointsToCSV, downloadCSVFile } from './utils/csvHelper';
import { Header } from './components/Header';
import { FilterSidebar } from './components/FilterSidebar';
import { MapViewer } from './components/MapViewer';
import { PointDetailModal } from './components/PointDetailModal';
import { SurveyAddModal } from './components/SurveyAddModal';
import { GoogleSheetsSyncModal } from './components/GoogleSheetsSyncModal';
import { FloodSimulatorModal } from './components/FloodSimulatorModal';

const STORAGE_KEY = 'vungtau_drainmap_points_v2';

export default function App() {
  // Load saved points or fall back to INITIAL_DRAIN_POINTS
  const [points, setPoints] = useState<DrainPoint[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading from localStorage:', e);
    }
    return INITIAL_DRAIN_POINTS;
  });

  // Save to localStorage when points change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(points));
    } catch (e) {
      console.warn('Error saving to localStorage:', e);
    }
  }, [points]);

  // Selected point for detailed inspection
  const [selectedPoint, setSelectedPoint] = useState<DrainPoint | null>(null);

  // Filters state
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    tinhTrang: 'Tất cả',
    loaiCong: 'Tất cả',
    khuVuc: 'Tất cả',
    mucDoNguyCo: 'Tất cả'
  });

  // Sidebar toggle for mobile/desktop
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [isFloodModalOpen, setIsFloodModalOpen] = useState(false);

  // Location picking on map
  const [isPickingLocation, setIsPickingLocation] = useState(false);
  const [pickedCoords, setPickedCoords] = useState<{ lat: number; lng: number } | null>(null);

  // Flood simulation state
  const [floodSimulation, setFloodSimulation] = useState<FloodSimulationParams>({
    rainIntensityMm: 65,
    tideLevelM: 2.8,
    simulationActive: false
  });

  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Handlers
  const handleAddPoint = (newPoint: DrainPoint) => {
    setPoints((prev) => [newPoint, ...prev]);
    setSelectedPoint(newPoint);
    setIsPickingLocation(false);
    setPickedCoords(null);
    showToast(`Đã thêm điểm khảo sát mới: ${newPoint.TenViTri}`);
  };

  const handleUpdateStatus = (id: string, newStatus: TinhTrang) => {
    setPoints((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated: DrainPoint = {
            ...p,
            TinhTrang: newStatus,
            NgayCapNhat: new Date().toISOString().slice(0, 16).replace('T', ' '),
            MucDoNguyCo:
              newStatus === 'Tắc nghẽn' ? 'Báo động' :
              newStatus === 'Bị lấp kín' ? 'Cao' :
              newStatus === 'Có rác' ? 'Trung bình' : 'Thấp',
            KhaNangThoatNuoc:
              newStatus === 'Tắc nghẽn' ? '10%' :
              newStatus === 'Bị lấp kín' ? '25%' :
              newStatus === 'Có rác' ? '60%' : '95%'
          };
          if (selectedPoint?.id === id) {
            setSelectedPoint(updated);
          }
          return updated;
        }
        return p;
      })
    );
    showToast(`Đã cập nhật tình trạng cống thành "${newStatus}"`);
  };

  const handleUpdateImage = (id: string, newImageUrl: string) => {
    setPoints((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated: DrainPoint = {
            ...p,
            HinhAnh: newImageUrl,
            NgayCapNhat: new Date().toISOString().slice(0, 16).replace('T', ' ')
          };
          if (selectedPoint?.id === id) {
            setSelectedPoint(updated);
          }
          return updated;
        }
        return p;
      })
    );
    showToast('Đã cập nhật hình ảnh con đường / điểm khảo sát thành công');
  };

  const handleDeletePoint = (id: string) => {
    setPoints((prev) => prev.filter((p) => p.id !== id));
    if (selectedPoint?.id === id) {
      setSelectedPoint(null);
    }
    showToast('Đã xóa điểm khảo sát');
  };

  const handleImportPoints = (newPoints: DrainPoint[], mode: 'replace' | 'append') => {
    if (mode === 'replace') {
      setPoints(newPoints);
    } else {
      setPoints((prev) => [...newPoints, ...prev]);
    }
    showToast(`Đã đồng bộ ${newPoints.length} điểm khảo sát từ Google Sheets`);
  };

  const handleExportCSV = () => {
    const csvData = exportPointsToCSV(points);
    downloadCSVFile(
      `DrainMap_VungTau_${new Date().toISOString().slice(0, 10)}.csv`,
      csvData
    );
    showToast('Đã xuất file CSV chuẩn Google Sheets');
  };

  const handleMapClickForNewPoint = (lat: number, lng: number) => {
    setPickedCoords({ lat, lng });
    setIsPickingLocation(false);
    setIsAddModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden select-none">
      {/* Top Navigation & KPI Header */}
      <Header
        points={points}
        onOpenAddModal={() => {
          setPickedCoords(null);
          setIsAddModalOpen(true);
        }}
        onOpenSyncModal={() => setIsSyncModalOpen(true)}
        onOpenFloodModal={() => setIsFloodModalOpen(true)}
        onExportCSV={handleExportCSV}
        floodSimulation={floodSimulation}
      />

      {/* Main Workspace: Left Filter Sidebar + Interactive Map */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Left Filter & Point List Sidebar */}
        <FilterSidebar
          points={points}
          filters={filters}
          onFilterChange={setFilters}
          selectedPoint={selectedPoint}
          onSelectPoint={(point) => {
            setSelectedPoint(point);
            if (window.innerWidth < 768) {
              setSidebarOpen(false);
            }
          }}
          isOpen={sidebarOpen}
          onToggleOpen={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Center/Right Map Canvas */}
        <main className="flex-1 relative h-full">
          <MapViewer
            points={points}
            selectedPoint={selectedPoint}
            onSelectPoint={(point) => setSelectedPoint(point)}
            onMapClickForNewPoint={handleMapClickForNewPoint}
            isPickingLocation={isPickingLocation}
            onTogglePickingLocation={() => setIsPickingLocation((prev) => !prev)}
            floodSimulation={floodSimulation}
          />
        </main>
      </div>

      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-blue-500/50 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in slide-in-from-bottom-5">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <PointDetailModal
        point={selectedPoint}
        onClose={() => setSelectedPoint(null)}
        onUpdateStatus={handleUpdateStatus}
        onUpdateImage={handleUpdateImage}
        onDeletePoint={handleDeletePoint}
      />

      <SurveyAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPoint={handleAddPoint}
        onPickLocationOnMap={() => {
          setIsPickingLocation(true);
          showToast('Nhấp vào bất kỳ vị trí nào trên bản đồ để chọn tọa độ cống');
        }}
        initialCoords={pickedCoords}
      />

      <GoogleSheetsSyncModal
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
        points={points}
        onImportPoints={handleImportPoints}
      />

      <FloodSimulatorModal
        isOpen={isFloodModalOpen}
        onClose={() => setIsFloodModalOpen(false)}
        simulation={floodSimulation}
        onUpdateSimulation={setFloodSimulation}
        points={points}
      />
    </div>
  );
}
