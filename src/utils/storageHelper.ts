import { DrainPoint } from '../types';
import { INITIAL_DRAIN_POINTS } from '../data/initialPoints';

const DB_NAME = 'drainmap_vungtau_db';
const DB_VERSION = 1;
const STORE_NAME = 'drain_points';
const LOCALSTORAGE_KEY = 'vungtau_drainmap_points_v2';
const LAST_SAVED_KEY = 'vungtau_drainmap_last_saved';

/**
 * Open or create IndexedDB database
 */
function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('Trình duyệt không hỗ trợ IndexedDB'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Không thể mở IndexedDB'));
  });
}

/**
 * Save points to IndexedDB (handles high-res images and large datasets without quota limit)
 * Also mirrors to localStorage as secondary cache (stripping huge base64 if quota exceeded)
 */
export async function savePointsToStorage(points: DrainPoint[]): Promise<{ success: boolean; error?: string; timestamp: string }> {
  const timestamp = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // 1. Save to IndexedDB
  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);

      // Clear existing records first to maintain exact list
      store.clear();

      points.forEach((p) => {
        store.put(p);
      });

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (idbErr) {
    console.warn('Cảnh báo lưu IndexedDB:', idbErr);
  }

  // 2. Also save to localStorage as backup/instant cache
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(points));
    localStorage.setItem(LAST_SAVED_KEY, timestamp);
  } catch (e: any) {
    console.warn('LocalStorage bị đầy hoặc lỗi, thử tối ưu bộ nhớ đệm:', e);
    // If quota exceeded due to large base64 images, save lightweight version without large images to localStorage
    try {
      const lightweight = points.map((p) => ({
        ...p,
        HinhAnh: p.HinhAnh && p.HinhAnh.startsWith('data:') ? '' : p.HinhAnh
      }));
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lightweight));
      localStorage.setItem(LAST_SAVED_KEY, timestamp);
    } catch {
      // IndexedDB already has the full data safely stored
    }
  }

  return { success: true, timestamp };
}

/**
 * Load points from storage:
 * Checks IndexedDB first (most complete), falls back to localStorage, then INITIAL_DRAIN_POINTS.
 */
export async function loadPointsFromStorage(): Promise<DrainPoint[]> {
  // Try IndexedDB first
  try {
    const db = await openDatabase();
    const idbPoints = await new Promise<DrainPoint[]>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result as DrainPoint[]);
      request.onerror = () => reject(request.error);
    });

    if (Array.isArray(idbPoints) && idbPoints.length > 0) {
      return idbPoints;
    }
  } catch (err) {
    console.warn('Không đọc được từ IndexedDB, chuyển sang localStorage:', err);
  }

  // Fallback to localStorage
  try {
    const saved = localStorage.getItem(LOCALSTORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Lỗi đọc localStorage:', e);
  }

  return INITIAL_DRAIN_POINTS;
}

/**
 * Synchronous initial read for fast component mounting
 */
export function getInitialPointsSync(): DrainPoint[] {
  try {
    const saved = localStorage.getItem(LOCALSTORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Lỗi getInitialPointsSync:', e);
  }
  return INITIAL_DRAIN_POINTS;
}

/**
 * Export complete points as JSON backup file (including photos, coords, notes)
 */
export function exportPointsToJSON(points: DrainPoint[]): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(points, null, 2));
  const downloadAnchor = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0, 10);
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `DrainMap_VungTau_Backup_${dateStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Import points from a JSON backup file
 */
export function importPointsFromJSON(file: File): Promise<DrainPoint[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);
        if (!Array.isArray(parsed)) {
          throw new Error('Dữ liệu file không phải là danh sách điểm khảo sát hợp lệ');
        }
        resolve(parsed as DrainPoint[]);
      } catch (err: any) {
        reject(new Error('File sao lưu JSON không đúng định dạng: ' + err.message));
      }
    };
    reader.onerror = () => reject(new Error('Lỗi khi đọc file sao lưu'));
    reader.readAsText(file, 'UTF-8');
  });
}

/**
 * Reset stored points to original Vũng Tàu sample points
 */
export async function resetStorageToDefaults(): Promise<DrainPoint[]> {
  try {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    localStorage.removeItem(LAST_SAVED_KEY);
    const db = await openDatabase();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).clear();
  } catch (e) {
    console.warn('Lỗi khi xóa storage:', e);
  }
  await savePointsToStorage(INITIAL_DRAIN_POINTS);
  return INITIAL_DRAIN_POINTS;
}
