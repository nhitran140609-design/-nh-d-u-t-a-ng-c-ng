export type LoaiCong = 'Hàm ếch' | 'Mặt đường';

export type TinhTrang = 'Bình thường' | 'Có rác' | 'Bị lấp kín' | 'Tắc nghẽn';

export type MucDoNguyCo = 'Thấp' | 'Trung bình' | 'Cao' | 'Báo động';

export interface DrainPoint {
  id: string;
  TenViTri: string; // Tên đường/số nhà (VD: Ngã tư Lê Lợi - Trần Hưng Đạo)
  ViDo: number; // Tọa độ Vĩ độ
  KinhDo: number; // Tọa độ Kinh độ
  LoaiCong: LoaiCong; // Hàm ếch hoặc Mặt đường
  TinhTrang: TinhTrang; // Bình thường, Có rác, Bị lấp kín, hoặc Tắc nghẽn
  HinhAnh?: string; // Link ảnh chụp thực tế cống
  NgayCapNhat: string; // Thời gian ghi nhận dữ liệu gần nhất
  KhuVuc?: string; // Phường Tam Thắng, Phước Thắng, Chợ Bến Đình, Chợ P9 cũ, Lưu Chí Hiếu, Bạch Đằng...
  GhiChu?: string;
  MucDoNguyCo?: MucDoNguyCo;
  ChieuSauNuocCm?: number;
  KhaNangThoatNuoc?: string;
  SoNhaTuyenDuong?: string;
}

export interface FilterState {
  searchQuery: string;
  tinhTrang: TinhTrang | 'Tất cả';
  loaiCong: LoaiCong | 'Tất cả';
  khuVuc: string;
  mucDoNguyCo: MucDoNguyCo | 'Tất cả';
}

export interface FloodSimulationParams {
  rainIntensityMm: number; // mm/h (0 - 150)
  tideLevelM: number; // mét (0 - 4.5m)
  simulationActive: boolean;
}
