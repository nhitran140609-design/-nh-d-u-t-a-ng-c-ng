import React, { useState, useRef } from 'react';
import { DrainPoint, TinhTrang } from '../types';
import {
  X,
  MapPin,
  ExternalLink,
  FolderOpen,
  Copy,
  Check,
  Calendar,
  AlertTriangle,
  Compass,
  Trash2,
  Camera,
  Upload,
  Link,
  RotateCcw,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { GOOGLE_DRIVE_FOLDER_URL } from '../data/initialPoints';

interface PointDetailModalProps {
  point: DrainPoint | null;
  onClose: () => void;
  onUpdateStatus: (id: string, newStatus: TinhTrang) => void;
  onUpdateImage: (id: string, newImageUrl: string) => void;
  onDeletePoint: (id: string) => void;
}

// Pre-defined sample photos of Vũng Tàu drains/roads for quick selection
const PRESET_PHOTOS = [
  {
    name: 'Chợ Bến Đình (Cửa thu ngập)',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?w=800&auto=format&fit=crop&q=80'
  },
  {
    name: 'Ngã tư Phường 9 (Cống hàm ếch)',
    url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80'
  },
  {
    name: 'Đường Lưu Chí Hiếu (Nạo vét rác)',
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=80'
  },
  {
    name: 'Gần Nhà sách Bạch Đằng (Mặt đường)',
    url: 'https://images.unsplash.com/photo-1508873696983-2df570464756?w=800&auto=format&fit=crop&q=80'
  },
  {
    name: 'Khu vực Tam Thắng (Cống hộp ngầm)',
    url: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&auto=format&fit=crop&q=80'
  },
  {
    name: 'Phước Thắng (Cửa xả thủy triều)',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80'
  }
];

export const PointDetailModal: React.FC<PointDetailModalProps> = ({
  point,
  onClose,
  onUpdateStatus,
  onUpdateImage,
  onDeletePoint
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!point) return null;

  // Convert Google Drive share link to direct image display URL
  const formatGoogleDriveUrl = (url: string): string => {
    const trimmed = url.trim();
    const driveMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/id=([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`;
    }
    return trimmed;
  };

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(`${point.ViDo}, ${point.KinhDo}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGoogleMapsDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${point.ViDo},${point.KinhDo}`;
    window.open(url, '_blank');
  };

  // Handle local image file upload (file or camera capture)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file hình ảnh hợp lệ (JPG, PNG, WEBP, etc.)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPreviewImage(dataUrl);
        setImageUrlInput(dataUrl);
        setUploadMessage(`Đã tải ảnh: ${file.name}`);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyNewImage = () => {
    const finalUrl = previewImage || formatGoogleDriveUrl(imageUrlInput);
    if (!finalUrl.trim()) {
      alert('Vui lòng tải ảnh lên hoặc nhập đường link hình ảnh.');
      return;
    }

    onUpdateImage(point.id, finalUrl.trim());
    setIsEditingImage(false);
    setUploadMessage(null);
  };

  const handleRemoveImage = () => {
    if (confirm('Bạn có chắc muốn xóa ảnh hiện tại của tuyến đường này?')) {
      onUpdateImage(point.id, '');
      setPreviewImage(null);
      setImageUrlInput('');
      setIsEditingImage(false);
    }
  };

  const statusBg =
    point.TinhTrang === 'Tắc nghẽn'
      ? 'bg-red-500/20 text-red-300 border-red-500/40'
      : point.TinhTrang === 'Bị lấp kín'
      ? 'bg-orange-500/20 text-orange-300 border-orange-500/40'
      : point.TinhTrang === 'Có rác'
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

  const currentDisplayImage = isEditingImage
    ? previewImage || point.HinhAnh
    : point.HinhAnh;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800 flex items-start justify-between bg-slate-950/40">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${statusBg}`}>
                {point.TinhTrang}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                {point.LoaiCong === 'Hàm ếch' ? '🕳️ Cống hàm ếch (Cửa thu vỉa hè)' : '▦ Cống mặt đường (Song chắn rác)'}
              </span>
              {point.KhuVuc && (
                <span className="text-xs text-blue-400 font-medium">
                  {point.KhuVuc}
                </span>
              )}
            </div>
            <h2 className="text-base font-bold text-white leading-tight">
              {point.TenViTri}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto space-y-4">
          {/* Photo Section with Direct Change Image Action */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-sky-400" />
                Ảnh khảo sát hiện trường ({point.TenViTri})
              </span>
              <button
                id="toggle-edit-image-btn"
                onClick={() => {
                  setIsEditingImage(!isEditingImage);
                  setPreviewImage(point.HinhAnh || null);
                  setImageUrlInput(point.HinhAnh || '');
                }}
                className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 text-xs px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{isEditingImage ? 'Đóng bộ sửa ảnh' : 'Thay đổi hình ảnh'}</span>
              </button>
            </div>

            {/* Photo Container */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
              {currentDisplayImage ? (
                <img
                  src={currentDisplayImage}
                  alt={`Ảnh chụp cống tại ${point.TenViTri}`}
                  className="w-full h-56 object-cover transition-transform group-hover:scale-102"
                />
              ) : (
                <div className="w-full h-44 flex flex-col items-center justify-center text-slate-500 bg-slate-950">
                  <FolderOpen className="w-10 h-10 mb-2 opacity-50" />
                  <span className="text-xs">Chưa có ảnh khảo sát trực tiếp</span>
                  <button
                    onClick={() => {
                      setIsEditingImage(true);
                      fileInputRef.current?.click();
                    }}
                    className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-semibold underline"
                  >
                    Bấm vào đây để tải ảnh lên ngay
                  </button>
                </div>
              )}

              {/* Quick Change Floating Overlay on hover */}
              {!isEditingImage && (
                <button
                  onClick={() => {
                    setIsEditingImage(true);
                    setPreviewImage(point.HinhAnh || null);
                    setImageUrlInput(point.HinhAnh || '');
                  }}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-[2px]"
                >
                  <Camera className="w-5 h-5 text-sky-300" />
                  <span>Bấm vào đây để thay đổi hình ảnh con đường này</span>
                </button>
              )}

              {/* Google Drive Link button */}
              <div className="absolute bottom-2 right-2 flex items-center gap-2">
                <a
                  href={GOOGLE_DRIVE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/90 hover:bg-slate-900 text-white text-[11px] px-2.5 py-1.5 rounded-lg border border-slate-700 shadow-lg flex items-center gap-1.5 backdrop-blur-sm"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Drive ảnh khảo sát</span>
                </a>
              </div>
            </div>

            {/* EXPANDABLE IMAGE EDITOR PANEL */}
            {isEditingImage && (
              <div className="bg-slate-950/90 border border-blue-500/40 rounded-xl p-3.5 space-y-3 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-blue-400" />
                    Cập nhật hình ảnh mới cho con đường / khu vực này:
                  </span>
                  {uploadMessage && (
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      {uploadMessage}
                    </span>
                  )}
                </div>

                {/* Method A: Upload File / Camera */}
                <div className="flex gap-2 items-center flex-wrap">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    id="btn-upload-device-photo"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Tải ảnh từ máy / Chụp ảnh</span>
                  </button>

                  {point.HinhAnh && (
                    <button
                      onClick={handleRemoveImage}
                      className="text-rose-400 hover:text-rose-300 text-xs px-2 py-1 rounded-lg hover:bg-rose-950/40 transition-colors"
                    >
                      Xóa ảnh hiện tại
                    </button>
                  )}
                </div>

                {/* Method B: URL input or Google Drive Link */}
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-medium block">
                    Hoặc dán đường link ảnh (URL web / link Google Drive):
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="input-point-image-url"
                      type="url"
                      value={imageUrlInput}
                      onChange={(e) => {
                        setImageUrlInput(e.target.value);
                        setPreviewImage(formatGoogleDriveUrl(e.target.value));
                      }}
                      placeholder="https://... hoặc https://drive.google.com/file/d/..."
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                    />
                    <button
                      onClick={() => {
                        const formatted = formatGoogleDriveUrl(imageUrlInput);
                        setPreviewImage(formatted);
                      }}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 transition-colors"
                    >
                      Xem thử
                    </button>
                  </div>
                </div>

                {/* Method C: Preset Samples for Quick Pick */}
                <div className="space-y-1.5">
                  <span className="text-[11px] text-slate-400 font-medium block">
                    Hoặc chọn nhanh ảnh mẫu khu vực Vũng Tàu:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {PRESET_PHOTOS.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => {
                          setPreviewImage(p.url);
                          setImageUrlInput(p.url);
                          setUploadMessage(`Đã chọn: ${p.name}`);
                        }}
                        className={`p-1.5 rounded-lg text-left text-[11px] border transition-all flex items-center gap-1.5 ${
                          previewImage === p.url
                            ? 'bg-blue-600/30 border-blue-500 text-blue-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <img
                          src={p.url}
                          alt={p.name}
                          className="w-6 h-6 rounded object-cover shrink-0"
                        />
                        <span className="truncate">{p.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => {
                      setIsEditingImage(false);
                      setPreviewImage(null);
                      setUploadMessage(null);
                    }}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    id="btn-save-point-image"
                    onClick={handleApplyNewImage}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md shadow-emerald-600/30 flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Lưu ảnh con đường</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Coordinates & Location info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-800/60 border border-slate-800 rounded-xl p-3">
              <div className="text-[11px] text-slate-400 font-medium mb-1 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                Tọa độ GPS (Vĩ độ, Kinh độ)
              </div>
              <div className="text-xs font-mono text-white flex items-center justify-between">
                <span>{point.ViDo}, {point.KinhDo}</span>
                <button
                  onClick={handleCopyCoords}
                  className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-700"
                  title="Sao chép tọa độ"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="bg-slate-800/60 border border-slate-800 rounded-xl p-3">
              <div className="text-[11px] text-slate-400 font-medium mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                Thời gian khảo sát gần nhất
              </div>
              <div className="text-xs font-semibold text-slate-200">
                {point.NgayCapNhat}
              </div>
            </div>
          </div>

          {/* Hydrological & Drainage Stats */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5">
            <div className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Đánh giá thoát nước & Nguy cơ ngập úng
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[11px] text-slate-400">Khả năng thoát</div>
                <div className="font-bold text-blue-400 text-sm mt-0.5">
                  {point.KhaNangThoatNuoc || '65%'}
                </div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[11px] text-slate-400">Nước/bùn đọng</div>
                <div className="font-bold text-amber-400 text-sm mt-0.5">
                  {point.ChieuSauNuocCm ?? 0} cm
                </div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[11px] text-slate-400">Mức độ cảnh báo</div>
                <div className={`font-bold text-sm mt-0.5 ${
                  point.TinhTrang === 'Tắc nghẽn' ? 'text-red-400' :
                  point.TinhTrang === 'Bị lấp kín' ? 'text-orange-400' :
                  point.TinhTrang === 'Có rác' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {point.MucDoNguyCo || 'Trung bình'}
                </div>
              </div>
            </div>

            {/* Field Notes */}
            <div className="mt-3 text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
              <span className="font-semibold text-slate-200">Ghi chú hiện trường: </span>
              {point.GhiChu || 'Cống cần kiểm tra định kỳ trước mùa mưa bão.'}
            </div>
          </div>

          {/* Change Status Fast Actions */}
          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3">
            <div className="text-xs font-bold text-slate-300 mb-2">
              Cập nhật nhanh tình trạng cống:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['Bình thường', 'Có rác', 'Bị lấp kín', 'Tắc nghẽn'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => onUpdateStatus(point.id, st)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                    point.TinhTrang === st
                      ? 'bg-blue-600 border-blue-400 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <button
            onClick={() => {
              if (confirm(`Bạn có chắc chắn muốn xóa điểm cống "${point.TenViTri}"?`)) {
                onDeletePoint(point.id);
                onClose();
              }
            }}
            className="text-rose-400 hover:text-rose-300 hover:bg-rose-950/50 px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Xóa điểm</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={openGoogleMapsDirections}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Chỉ đường</span>
            </button>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors shadow-sm"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
