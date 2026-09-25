import heic2any from 'heic2any';

export interface ProcessedImageResult {
  dataUrl: string;
  isHeic: boolean;
  fileName: string;
  originalSize: number;
  newSize?: number;
}

/**
 * Check if a file is an Apple HEIC / HEIF image format
 */
export function isHeicFile(file: File): boolean {
  if (!file) return false;
  const name = (file.name || '').toLowerCase();
  const type = (file.type || '').toLowerCase();
  return (
    name.endsWith('.heic') ||
    name.endsWith('.heif') ||
    type === 'image/heic' ||
    type === 'image/heif' ||
    type === 'image/heic-sequence' ||
    type === 'image/heif-sequence'
  );
}

/**
 * Converts a HEIC/HEIF or standard image File to a browser-displayable Data URL (JPEG/PNG).
 * Handles HEIC conversion via heic2any with automatic fallback.
 */
export async function processImageFile(
  file: File,
  onProgress?: (status: string) => void
): Promise<ProcessedImageResult> {
  const isHeic = isHeicFile(file);

  if (isHeic) {
    onProgress?.('Đang giải mã và chuyển đổi ảnh HEIC từ iPhone/iPad sang JPG...');

    try {
      // heic2any conversion
      const conversionResult = await heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.85
      });

      const convertedBlob: Blob = Array.isArray(conversionResult)
        ? conversionResult[0]
        : conversionResult;

      const dataUrl = await blobToDataURL(convertedBlob);
      onProgress?.('Chuyển đổi ảnh HEIC thành công!');

      return {
        dataUrl,
        isHeic: true,
        fileName: file.name.replace(/\.(heic|heif)$/i, '.jpg'),
        originalSize: file.size,
        newSize: convertedBlob.size
      };
    } catch (err: any) {
      console.error('Lỗi khi chuyển đổi HEIC:', err);
      throw new Error(
        `Không thể chuyển đổi ảnh HEIC: ${err?.message || 'Định dạng HEIC không hợp lệ hoặc không được hỗ trợ'}`
      );
    }
  }

  // Standard image (JPG, PNG, WebP, GIF, SVG)
  onProgress?.('Đang đọc dữ liệu ảnh...');
  const dataUrl = await blobToDataURL(file);
  return {
    dataUrl,
    isHeic: false,
    fileName: file.name,
    originalSize: file.size
  };
}

/**
 * Convert a Blob / File to Base64 Data URL
 */
export function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Không thể đọc file hình ảnh'));
      }
    };
    reader.onerror = () => {
      reject(reader.error || new Error('Lỗi khi đọc file'));
    };
    reader.readAsDataURL(blob);
  });
}
