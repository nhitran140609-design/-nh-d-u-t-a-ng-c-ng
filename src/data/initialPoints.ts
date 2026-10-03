import { DrainPoint, SurveyPhotoItem } from '../types';

export const INITIAL_DRAIN_POINTS: DrainPoint[] = [
  // --- KHU VỰC CHỢ BẾN ĐÌNH & PHƯỜNG THẮNG NHÌ (4 điểm) ---
  {
    id: 'BD-01',
    TenViTri: 'Cổng chính Chợ Bến Đình, đường Lê Lợi',
    ViDo: 10.3698,
    KinhDo: 107.0782,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Tắc nghẽn',
    HinhAnh: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-20 08:30',
    KhuVuc: 'Chợ Bến Đình',
    GhiChu: 'Khu vực họp chợ buôn bán hải sản tươi sống, rác bọc nilong và bùn đất bít kín 90% cửa thu nước hàm ếch.',
    MucDoNguyCo: 'Báo động',
    ChieuSauNuocCm: 25,
    KhaNangThoatNuoc: '10%',
    SoNhaTuyenDuong: 'Số 462 Lê Lợi, Phường Thắng Nhì'
  },
  {
    id: 'BD-02',
    TenViTri: 'Ngã ba Lê Lợi - Ngư Phủ (Gần Chợ Bến Đình)',
    ViDo: 10.3712,
    KinhDo: 107.0795,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Có rác',
    HinhAnh: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-19 14:15',
    KhuVuc: 'Chợ Bến Đình',
    GhiChu: 'Nắp cống song chắn rác bằng gang bị rác hữu cơ và bao bì đọng quanh mép lưới, cần nạo vét định kỳ.',
    MucDoNguyCo: 'Trung bình',
    ChieuSauNuocCm: 8,
    KhaNangThoatNuoc: '60%',
    SoNhaTuyenDuong: 'Góc Lê Lợi - Ngư Phủ'
  },
  {
    id: 'BD-03',
    TenViTri: 'Đường Triệu Việt Vương ra rạch Bến Đình',
    ViDo: 10.3685,
    KinhDo: 107.0768,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Bình thường',
    HinhAnh: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-21 10:00',
    KhuVuc: 'Chợ Bến Đình',
    GhiChu: 'Cửa xả ra kênh rạch đã được nạo vét thông thoáng, nước rút nhanh khi có mưa rào.',
    MucDoNguyCo: 'Thấp',
    ChieuSauNuocCm: 0,
    KhaNangThoatNuoc: '95%',
    SoNhaTuyenDuong: 'Đầu đường Triệu Việt Vương'
  },
  {
    id: 'BD-04',
    TenViTri: 'Hẻm 442 Lê Lợi (Khu dân cư Chợ Bến Đình)',
    ViDo: 10.3705,
    KinhDo: 107.0776,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Bị lấp kín',
    HinhAnh: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-18 16:20',
    KhuVuc: 'Chợ Bến Đình',
    GhiChu: 'Hộ dân đổ bê tông xây gờ dốc lấn chiếm lấp một nửa miệng thu nước cống.',
    MucDoNguyCo: 'Cao',
    ChieuSauNuocCm: 15,
    KhaNangThoatNuoc: '25%',
    SoNhaTuyenDuong: 'Hẻm 442 Lê Lợi'
  },

  // --- KHU VỰC PHƯỜNG 9 CŨ (CHỢ PHƯỜNG 9 & NGUYỄN AN NINH) (4 điểm) ---
  {
    id: 'P9-01',
    TenViTri: 'Cổng Chợ Phường 9 cũ, đường Nguyễn An Ninh',
    ViDo: 10.3752,
    KinhDo: 107.0948,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Tắc nghẽn',
    HinhAnh: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-21 07:45',
    KhuVuc: 'Chợ P9 cũ',
    GhiChu: 'Nắp cống đan bê tông bị nứt, rác sinh hoạt từ chợ chèn đầy hố ga làm ứ đọng nước bốc mùi.',
    MucDoNguyCo: 'Báo động',
    ChieuSauNuocCm: 22,
    KhaNangThoatNuoc: '15%',
    SoNhaTuyenDuong: 'Đường Nguyễn An Ninh (Khu Chợ P9 cũ)'
  },
  {
    id: 'P9-02',
    TenViTri: 'Ngã tư Nguyễn An Ninh - Trương Công Định',
    ViDo: 10.3738,
    KinhDo: 107.0912,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Có rác',
    HinhAnh: 'https://images.unsplash.com/photo-1508873696983-2df570464756?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1508873696983-2df570464756?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-20 15:10',
    KhuVuc: 'Chợ P9 cũ',
    GhiChu: 'Cửa hàm ếch gom nước mưa đọng nhiều lá cây và bọc xốp sau trận mưa lớn.',
    MucDoNguyCo: 'Trung bình',
    ChieuSauNuocCm: 6,
    KhaNangThoatNuoc: '55%',
    SoNhaTuyenDuong: 'Ngã tư Nguyễn An Ninh - Trương Công Định'
  },
  {
    id: 'P9-03',
    TenViTri: 'Số 185 Trương Công Định (Đoạn P.9 cũ)',
    ViDo: 10.3725,
    KinhDo: 107.0895,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Bình thường',
    HinhAnh: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-22 09:15',
    KhuVuc: 'Chợ P9 cũ',
    GhiChu: 'Vừa được đơn vị thoát nước nạo vét đầu tuần, bùn cát đã dọn sạch.',
    MucDoNguyCo: 'Thấp',
    ChieuSauNuocCm: 0,
    KhaNangThoatNuoc: '90%',
    SoNhaTuyenDuong: '185 Trương Công Định'
  },
  {
    id: 'P9-04',
    TenViTri: 'Hẻm 93 Nguyễn An Ninh, giáp hồ Bàu Trũng',
    ViDo: 10.3768,
    KinhDo: 107.0975,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Bị lấp kín',
    HinhAnh: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-17 11:30',
    KhuVuc: 'Chợ P9 cũ',
    GhiChu: 'Cát công trình xây dựng nhà dân bên cạnh chảy vào lấp kín hoàn toàn miệng cống.',
    MucDoNguyCo: 'Cao',
    ChieuSauNuocCm: 18,
    KhaNangThoatNuoc: '20%',
    SoNhaTuyenDuong: 'Hẻm 93 Nguyễn An Ninh'
  },

  // --- TUYẾN ĐƯỜNG LƯU CHÍ HIẾU & CHỢ LƯU CHÍ HIẾU (4 điểm) ---
  {
    id: 'LCH-01',
    TenViTri: 'Cổng Chợ Lưu Chí Hiếu, số 45 Lưu Chí Hiếu',
    ViDo: 10.3912,
    KinhDo: 107.1215,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Tắc nghẽn',
    HinhAnh: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-21 16:30',
    KhuVuc: 'Đường Lưu Chí Hiếu',
    GhiChu: 'Điểm trũng ngập úng nghiêm trọng khi triều cường hoặc mưa trên 45 phút, rác chợ dồn ứ ngẹt kín.',
    MucDoNguyCo: 'Báo động',
    ChieuSauNuocCm: 30,
    KhaNangThoatNuoc: '5%',
    SoNhaTuyenDuong: '45 Lưu Chí Hiếu, Chợ Lưu Chí Hiếu'
  },
  {
    id: 'LCH-02',
    TenViTri: 'Ngã ba Lưu Chí Hiếu - Bình Giã',
    ViDo: 10.3895,
    KinhDo: 107.1188,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Có rác',
    HinhAnh: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-19 13:40',
    KhuVuc: 'Đường Lưu Chí Hiếu',
    GhiChu: 'Miệng cống hàm ếch thu nước mặt đường có nhiều cành cây khô và rác nhựa vương vãi.',
    MucDoNguyCo: 'Trung bình',
    ChieuSauNuocCm: 10,
    KhaNangThoatNuoc: '50%',
    SoNhaTuyenDuong: 'Ngã ba Lưu Chí Hiếu - Bình Giã'
  },
  {
    id: 'LCH-03',
    TenViTri: 'Số 128 Lưu Chí Hiếu (Gần trạm xăng)',
    ViDo: 10.3935,
    KinhDo: 107.1242,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Bình thường',
    HinhAnh: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-22 08:20',
    KhuVuc: 'Đường Lưu Chí Hiếu',
    GhiChu: 'Hệ thống hố ga mới nâng cấp đợt thảm nhựa đường gần nhất, nước lưu thông tốt.',
    MucDoNguyCo: 'Thấp',
    ChieuSauNuocCm: 0,
    KhaNangThoatNuoc: '90%',
    SoNhaTuyenDuong: '128 Lưu Chí Hiếu'
  },
  {
    id: 'LCH-04',
    TenViTri: 'Đầu đường Lưu Chí Hiếu giao đường 30 Tháng 4',
    ViDo: 10.3882,
    KinhDo: 107.1165,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Bị lấp kín',
    HinhAnh: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-20 11:05',
    KhuVuc: 'Đường Lưu Chí Hiếu',
    GhiChu: 'Tấm đan chắn rác bị đất đá bồi đắp sau đợt mưa rào kéo dài, làm hẹp tiết diện dòng chảy.',
    MucDoNguyCo: 'Cao',
    ChieuSauNuocCm: 12,
    KhaNangThoatNuoc: '30%',
    SoNhaTuyenDuong: 'Góc Lưu Chí Hiếu - 30/4'
  },

  // --- KHU VỰC NHÀ SÁCH GẦN BẠCH ĐẰNG & BÃI TRƯỚC (4 điểm) ---
  {
    id: 'BDG-01',
    TenViTri: 'Trước cửa Nhà sách gần đường Bạch Đằng - Lý Thường Kiệt',
    ViDo: 10.3595,
    KinhDo: 107.0732,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Có rác',
    HinhAnh: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-21 15:50',
    KhuVuc: 'Nhà sách gần Bạch Đằng',
    GhiChu: 'Lá me rụng nhiều bám vào vỉ sắt miệng cống hàm ếch trước khu nhà sách.',
    MucDoNguyCo: 'Trung bình',
    ChieuSauNuocCm: 5,
    KhaNangThoatNuoc: '65%',
    SoNhaTuyenDuong: 'Góc Bạch Đằng - Lý Thường Kiệt'
  },
  {
    id: 'BDG-02',
    TenViTri: 'Ngã ba Bạch Đằng - Lê Lợi (Đoạn bờ kè bến tàu)',
    ViDo: 10.3615,
    KinhDo: 107.0742,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Bình thường',
    HinhAnh: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-22 09:40',
    KhuVuc: 'Nhà sách gần Bạch Đằng',
    GhiChu: 'Cửa xả trực tiếp ra cảng biển có van ngăn triều một chiều hoạt động hiệu quả.',
    MucDoNguyCo: 'Thấp',
    ChieuSauNuocCm: 0,
    KhaNangThoatNuoc: '95%',
    SoNhaTuyenDuong: 'Bờ kè Bạch Đằng'
  },
  {
    id: 'BDG-03',
    TenViTri: 'Số 12 đường Bạch Đằng, gần quán cafe bờ sông',
    ViDo: 10.3582,
    KinhDo: 107.0725,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Bị lấp kín',
    HinhAnh: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-19 17:00',
    KhuVuc: 'Nhà sách gần Bạch Đằng',
    GhiChu: 'Thảm cỏ và chậu cây cảnh của quán lấn mép vỉa hè che miệng thu nước hàm ếch.',
    MucDoNguyCo: 'Cao',
    ChieuSauNuocCm: 14,
    KhaNangThoatNuoc: '35%',
    SoNhaTuyenDuong: '12 Bạch Đằng'
  },
  {
    id: 'BDG-04',
    TenViTri: 'Ngã tư Bạch Đằng - Ba Cu',
    ViDo: 10.3568,
    KinhDo: 107.0718,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Tắc nghẽn',
    HinhAnh: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-20 14:00',
    KhuVuc: 'Nhà sách gần Bạch Đằng',
    GhiChu: 'Đường ống chính bị sụp lở phía dưới đáy hố ga, nước không thoát được dồn ngược lên mặt đường.',
    MucDoNguyCo: 'Báo động',
    ChieuSauNuocCm: 20,
    KhaNangThoatNuoc: '10%',
    SoNhaTuyenDuong: 'Góc Bạch Đằng - Ba Cu'
  },

  // --- KHU VỰC PHƯỜNG PHƯỚC THẮNG (5 điểm) ---
  {
    id: 'PT-01',
    TenViTri: 'Đường 30 Tháng 4 (Đoạn Cầu Rạch Bà, P. Phước Thắng)',
    ViDo: 10.4185,
    KinhDo: 107.1395,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Tắc nghẽn',
    HinhAnh: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-21 11:20',
    KhuVuc: 'Phường Phước Thắng',
    GhiChu: 'Khu vực thấp trũng giáp sông, bùn phù sa lắng dày hơn 35cm trong lòng cống thu nước dọc quốc lộ.',
    MucDoNguyCo: 'Báo động',
    ChieuSauNuocCm: 28,
    KhaNangThoatNuoc: '10%',
    SoNhaTuyenDuong: 'Km 62 Quốc lộ 51/30 Tháng 4, P. Phước Thắng'
  },
  {
    id: 'PT-02',
    TenViTri: 'Khu dân cư đường Đô Lương, P. Phước Thắng',
    ViDo: 10.4225,
    KinhDo: 107.1438,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Có rác',
    HinhAnh: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-20 09:30',
    KhuVuc: 'Phường Phước Thắng',
    GhiChu: 'Cống mặt đường có rác bao bì nilong vướng lưới thép chắn rác.',
    MucDoNguyCo: 'Trung bình',
    ChieuSauNuocCm: 7,
    KhaNangThoatNuoc: '60%',
    SoNhaTuyenDuong: 'Đường Đô Lương, P. Phước Thắng'
  },
  {
    id: 'PT-03',
    TenViTri: 'Tuyến đường Võ Nguyên Giáp giáp sông Cây Khế',
    ViDo: 10.4285,
    KinhDo: 107.1485,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Bình thường',
    HinhAnh: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-22 07:15',
    KhuVuc: 'Phường Phước Thắng',
    GhiChu: 'Cống hộp đôi xả lũ ra sông vận hành trơn tru, đáy cống sạch.',
    MucDoNguyCo: 'Thấp',
    ChieuSauNuocCm: 0,
    KhaNangThoatNuoc: '100%',
    SoNhaTuyenDuong: 'Tuyến tránh QL51, P. Phước Thắng'
  },
  {
    id: 'PT-04',
    TenViTri: 'Hẻm 1120 đường 30 Tháng 4, Phường Phước Thắng',
    ViDo: 10.4150,
    KinhDo: 107.1360,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Bị lấp kín',
    HinhAnh: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-18 15:45',
    KhuVuc: 'Phường Phước Thắng',
    GhiChu: 'Miệng cống bị đất san lấp mặt bằng của dự án lân cận tràn qua lấp kín miệng hố ga.',
    MucDoNguyCo: 'Cao',
    ChieuSauNuocCm: 16,
    KhaNangThoatNuoc: '25%',
    SoNhaTuyenDuong: 'Hẻm 1120 đường 30 Tháng 4'
  },
  {
    id: 'PT-05',
    TenViTri: 'Khu vực Chợ Rạch Dừa & Đường Bùi Kỷ, P. Phước Thắng',
    ViDo: 10.4085,
    KinhDo: 107.1310,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Có rác',
    HinhAnh: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1516214104703-d870798883c5?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-22 10:30',
    KhuVuc: 'Phường Phước Thắng',
    GhiChu: 'Cống thoát nước khu chợ Rạch Dừa giao cắt đường Bùi Kỷ có nhiều túi nilon và bùn đọng cục bộ.',
    MucDoNguyCo: 'Trung bình',
    ChieuSauNuocCm: 11,
    KhaNangThoatNuoc: '50%',
    SoNhaTuyenDuong: 'Đường 30/4 giao Bùi Kỷ, P. Phước Thắng'
  },

  // --- KHU VỰC PHƯỜNG TAM THẮNG (5 điểm) ---
  {
    id: 'TT-01',
    TenViTri: 'Ngã tư Hoàng Hoa Thám - Xô Viết Nghệ Tĩnh, P. Tam Thắng',
    ViDo: 10.3475,
    KinhDo: 107.0862,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Tắc nghẽn',
    HinhAnh: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-21 14:10',
    KhuVuc: 'Phường Tam Thắng',
    GhiChu: 'Khu vực mật độ khách du lịch cao, dầu mỡ thức ăn từ các quán hải sản đông lạnh vón cục gây tắc cống.',
    MucDoNguyCo: 'Báo động',
    ChieuSauNuocCm: 26,
    KhaNangThoatNuoc: '10%',
    SoNhaTuyenDuong: 'Ngã tư Hoàng Hoa Thám - Xô Viết Nghệ Tĩnh'
  },
  {
    id: 'TT-02',
    TenViTri: 'Đường Thùy Vân (Đoạn Bãi Sau, Phường Tam Thắng)',
    ViDo: 10.3425,
    KinhDo: 107.0895,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Có rác',
    HinhAnh: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-22 06:30',
    KhuVuc: 'Phường Tam Thắng',
    GhiChu: 'Cát biển theo gió và bước chân du khách tấp vào miệng rãnh thu nước mặt đường.',
    MucDoNguyCo: 'Trung bình',
    ChieuSauNuocCm: 8,
    KhaNangThoatNuoc: '65%',
    SoNhaTuyenDuong: 'Số 125 Thùy Vân, Bãi Sau'
  },
  {
    id: 'TT-03',
    TenViTri: 'Số 84 Nam Kỳ Khởi Nghĩa, P. Tam Thắng',
    ViDo: 10.3512,
    KinhDo: 107.0845,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Bình thường',
    HinhAnh: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-21 16:00',
    KhuVuc: 'Phường Tam Thắng',
    GhiChu: 'Hệ thống cống hộp thoát nước ra hồ Bàu Sen thông thoáng, nước chảy tốt.',
    MucDoNguyCo: 'Thấp',
    ChieuSauNuocCm: 0,
    KhaNangThoatNuoc: '95%',
    SoNhaTuyenDuong: '84 Nam Kỳ Khởi Nghĩa'
  },
  {
    id: 'TT-04',
    TenViTri: 'Ngõ 208 Hoàng Hoa Thám (Khu dân cư Tam Thắng)',
    ViDo: 10.3458,
    KinhDo: 107.0835,
    LoaiCong: 'Mặt đường',
    TinhTrang: 'Bị lấp kín',
    HinhAnh: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-19 10:25',
    KhuVuc: 'Phường Tam Thắng',
    GhiChu: 'Người dân đặt tấm tôn kim loại bịt kín nắp cống để ngăn mùi thức ăn phân hủy bốc lên.',
    MucDoNguyCo: 'Cao',
    ChieuSauNuocCm: 14,
    KhaNangThoatNuoc: '20%',
    SoNhaTuyenDuong: 'Hẻm 208 Hoàng Hoa Thám'
  },
  {
    id: 'TT-05',
    TenViTri: 'Dọc đường Phạm Hồng Thái & Khu nhà ở Đại An, P. Tam Thắng',
    ViDo: 10.3495,
    KinhDo: 107.0815,
    LoaiCong: 'Hàm ếch',
    TinhTrang: 'Có rác',
    HinhAnh: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80',
    HinhAnhDanhSach: [
      'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80'
    ],
    NgayCapNhat: '2026-09-22 11:15',
    KhuVuc: 'Phường Tam Thắng',
    GhiChu: 'Đoạn đường Phạm Hồng Thái nối khu Đại An - Tố Hữu có bùn lá cây lấp hố ga gom nước mưa.',
    MucDoNguyCo: 'Trung bình',
    ChieuSauNuocCm: 9,
    KhaNangThoatNuoc: '55%',
    SoNhaTuyenDuong: 'Đường Phạm Hồng Thái, P. Tam Thắng'
  }
];

// --- TOÀN BỘ 26 ẢNH KHẢO SÁT HIỆN TRƯỜNG VŨNG TÀU (FIELD SURVEY PHOTO CATALOG) ---
export const SURVEY_PHOTOS_26: SurveyPhotoItem[] = [
  {
    id: 'PHOTO-01',
    pointId: 'BD-01',
    title: 'Ảnh 1: Cổng Chợ Bến Đình - Cửa hàm ếch tắc nghẽn',
    khuVuc: 'Chợ Bến Đình',
    url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Tắc nghẽn',
    moTa: 'Tắc nghẽn do rác hữu cơ, túi ni lông và bùn đất bít cửa thu nước Chợ Bến Đình.'
  },
  {
    id: 'PHOTO-02',
    pointId: 'BD-02',
    title: 'Ảnh 2: Ngã ba Lê Lợi - Ngư Phủ đọng rác nắp gang',
    khuVuc: 'Chợ Bến Đình',
    url: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Có rác',
    moTa: 'Nắp cống gang mặt đường bị rác sinh hoạt và lá cây cuốn vào song chắn.'
  },
  {
    id: 'PHOTO-03',
    pointId: 'BD-03',
    title: 'Ảnh 3: Đường Triệu Việt Vương xả rạch Bến Đình',
    khuVuc: 'Chợ Bến Đình',
    url: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Bình thường',
    moTa: 'Cửa xả cống hộp thông suốt, đã được nạo vét định kỳ bảo đảm thoát nước tốt.'
  },
  {
    id: 'PHOTO-04',
    pointId: 'BD-04',
    title: 'Ảnh 4: Hẻm 442 Lê Lợi bị gờ bê tông lấp kín',
    khuVuc: 'Chợ Bến Đình',
    url: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Bị lấp kín',
    moTa: 'Hộ dân đổ bê tông làm dốc xe lấn chiếm, che lấp gần như toàn bộ miệng cống.'
  },
  {
    id: 'PHOTO-05',
    pointId: 'P9-01',
    title: 'Ảnh 5: Cổng Chợ Phường 9 cũ đường Nguyễn An Ninh',
    khuVuc: 'Chợ P9 cũ',
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Tắc nghẽn',
    moTa: 'Hố ga cống vỡ đan nắp, rác dồn ứ làm nước thải chợ bốc mùi khi trời nắng nóng.'
  },
  {
    id: 'PHOTO-06',
    pointId: 'P9-02',
    title: 'Ảnh 6: Ngã tư Nguyễn An Ninh - Trương Công Định',
    khuVuc: 'Chợ P9 cũ',
    url: 'https://images.unsplash.com/photo-1508873696983-2df570464756?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Có rác',
    moTa: 'Rác lá cây và túi xốp đọng miệng cống hàm ếch gom nước mưa vỉa hè.'
  },
  {
    id: 'PHOTO-07',
    pointId: 'P9-03',
    title: 'Ảnh 7: Số 185 Trương Công Định đã nạo vét',
    khuVuc: 'Chợ P9 cũ',
    url: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Bình thường',
    moTa: 'Lòng cống bê tông sâu 1m sạch sẽ, đã nạo vét bùn đất sẵn sàng mùa mưa.'
  },
  {
    id: 'PHOTO-08',
    pointId: 'P9-04',
    title: 'Ảnh 8: Hẻm 93 Nguyễn An Ninh giáp hồ Bàu Trũng',
    khuVuc: 'Chợ P9 cũ',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Bị lấp kín',
    moTa: 'Cát xây dựng san lấp mặt bằng chảy tràn lấp toàn bộ miệng thu cống hộp.'
  },
  {
    id: 'PHOTO-09',
    pointId: 'LCH-01',
    title: 'Ảnh 9: Cổng Chợ Lưu Chí Hiếu ngập úng trọng điểm',
    khuVuc: 'Đường Lưu Chí Hiếu',
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Tắc nghẽn',
    moTa: 'Đoạn trũng sâu ngập nước tới 30cm khi triều cường, rác thải dồn ứ cục bộ.'
  },
  {
    id: 'PHOTO-10',
    pointId: 'LCH-02',
    title: 'Ảnh 10: Ngã ba Lưu Chí Hiếu - Bình Giã',
    khuVuc: 'Đường Lưu Chí Hiếu',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Có rác',
    moTa: 'Miệng cống vỉa hè có nhiều cành cây gãy mục và chai nhựa kẹt tại song chắn.'
  },
  {
    id: 'PHOTO-11',
    pointId: 'LCH-03',
    title: 'Ảnh 11: Số 128 Lưu Chí Hiếu mới cải tạo',
    khuVuc: 'Đường Lưu Chí Hiếu',
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Bình thường',
    moTa: 'Hố ga kiên cố mới thảm bê tông nhựa, khả năng tiêu thoát nước đạt 90%.'
  },
  {
    id: 'PHOTO-12',
    pointId: 'LCH-04',
    title: 'Ảnh 12: Giao lộ Lưu Chí Hiếu - đường 30 Tháng 4',
    khuVuc: 'Đường Lưu Chí Hiếu',
    url: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Bị lấp kín',
    moTa: 'Đất đá bồi tụ dày đặc sau trận mưa giông lớn làm hẹp đáng kể dòng chảy vào cống.'
  },
  {
    id: 'PHOTO-13',
    pointId: 'BDG-01',
    title: 'Ảnh 13: Trước Nhà sách Bạch Đằng - Lý Thường Kiệt',
    khuVuc: 'Nhà sách gần Bạch Đằng',
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Có rác',
    moTa: 'Lá me tây rụng dày đặc che kín các khe song chắn rác hàm ếch bờ Bãi Trước.'
  },
  {
    id: 'PHOTO-14',
    pointId: 'BDG-02',
    title: 'Ảnh 14: Bờ kè Bạch Đằng bến tàu Bãi Trước',
    khuVuc: 'Nhà sách gần Bạch Đằng',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Bình thường',
    moTa: 'Cửa xả biển có van ngăn triều tự động hoạt động rất tốt, không trào ngược nước biển.'
  },
  {
    id: 'PHOTO-15',
    pointId: 'BDG-03',
    title: 'Ảnh 15: Số 12 Bạch Đằng quán cafe lấn chiếm',
    khuVuc: 'Nhà sách gần Bạch Đằng',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Bị lấp kín',
    moTa: 'Chậu hoa cây cảnh và thảm cỏ nhân tạo trải đè lên miệng cống thoát nước.'
  },
  {
    id: 'PHOTO-16',
    pointId: 'BDG-04',
    title: 'Ảnh 16: Ngã tư Bạch Đằng - Ba Cu tắc ống ngầm',
    khuVuc: 'Nhà sách gần Bạch Đằng',
    url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Tắc nghẽn',
    moTa: 'Đáy hố ga bị nứt lún gạch vỡ chèn đường ống, nước tràn ngược bề mặt khi mưa.'
  },
  {
    id: 'PHOTO-17',
    pointId: 'PT-01',
    title: 'Ảnh 17: Cầu Rạch Bà - Đường 30/4 Phường Phước Thắng',
    khuVuc: 'Phường Phước Thắng',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Tắc nghẽn',
    moTa: 'Bùn phù sa bồi lắng dày trên 35cm, làm nước mưa không thoát kịp ra sông Rạch Bà.'
  },
  {
    id: 'PHOTO-18',
    pointId: 'PT-02',
    title: 'Ảnh 18: Khu dân cư Đô Lương Phường Phước Thắng',
    khuVuc: 'Phường Phước Thắng',
    url: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Có rác',
    moTa: 'Túi nilon rác chợ vướng kín mặt lưới sắt, giảm 40% lưu lượng nước rút.'
  },
  {
    id: 'PHOTO-19',
    pointId: 'PT-03',
    title: 'Ảnh 19: Tuyến Võ Nguyên Giáp ra sông Cây Khế',
    khuVuc: 'Phường Phước Thắng',
    url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Bình thường',
    moTa: 'Cống hộp đôi bê tông xả lũ lớn, van điều tiết và cửa ngăn thủy triều trơn tru.'
  },
  {
    id: 'PHOTO-20',
    pointId: 'PT-04',
    title: 'Ảnh 20: Hẻm 1120 đường 30/4 Phường Phước Thắng',
    khuVuc: 'Phường Phước Thắng',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Bị lấp kín',
    moTa: 'Đất san lấp dự án chảy tràn che lấp miệng hố ga trong hẻm sâu.'
  },
  {
    id: 'PHOTO-21',
    pointId: 'PT-05',
    title: 'Ảnh 21: Chợ Rạch Dừa & Đường Bùi Kỷ (P. Phước Thắng)',
    khuVuc: 'Phường Phước Thắng',
    url: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Có rác',
    moTa: 'Cống thu nước mưa khu buôn bán Chợ Rạch Dừa giao đường Bùi Kỷ đọng nhiều rác màng bọc.'
  },
  {
    id: 'PHOTO-22',
    pointId: 'TT-01',
    title: 'Ảnh 22: Hoàng Hoa Thám - Xô Viết Nghệ Tĩnh (Tam Thắng)',
    khuVuc: 'Phường Tam Thắng',
    url: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Tắc nghẽn',
    moTa: 'Khu ẩm thực du lịch, dầu mỡ vón tảng trong lòng cống hàm ếch gây ách tắc.'
  },
  {
    id: 'PHOTO-23',
    pointId: 'TT-02',
    title: 'Ảnh 23: Tuyến đường Thùy Vân Bãi Sau (P. Tam Thắng)',
    khuVuc: 'Phường Tam Thắng',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Có rác',
    moTa: 'Cát biển mịn và lá dừa rụng tấp dày vào rãnh thu nước dọc công viên bờ biển.'
  },
  {
    id: 'PHOTO-24',
    pointId: 'TT-03',
    title: 'Ảnh 24: Số 84 Nam Kỳ Khởi Nghĩa ra hồ Bàu Sen',
    khuVuc: 'Phường Tam Thắng',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Bình thường',
    moTa: 'Hệ thống cống hộp trục chính kết nối hồ điều hòa Bàu Sen lưu thông ổn định.'
  },
  {
    id: 'PHOTO-25',
    pointId: 'TT-04',
    title: 'Ảnh 25: Ngõ 208 Hoàng Hoa Thám bị đậy kín',
    khuVuc: 'Phường Tam Thắng',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Mặt đường',
    tinhTrang: 'Bị lấp kín',
    moTa: 'Tấm tôn và cao su che kín nắp cống do lo ngại mùi hôi, làm nước mưa không thoát được.'
  },
  {
    id: 'PHOTO-26',
    pointId: 'TT-05',
    title: 'Ảnh 26: Tuyến Phạm Hồng Thái - THPT Chuyên Lê Quý Đôn & Đại An',
    khuVuc: 'Phường Tam Thắng',
    url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80',
    loaiCong: 'Hàm ếch',
    tinhTrang: 'Có rác',
    moTa: 'Tuyến cống gom nước mưa đoạn Phạm Hồng Thái qua khu dân cư Đại An - Tố Hữu có bùn lá đọng.'
  }
];

export const GOOGLE_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/14wzZzmc9RbYJZfl7M222amU9xu8XKsxI';
