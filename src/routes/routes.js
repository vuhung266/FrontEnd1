// Pages
import Login from '~/pages/Login/Login';
import Home from '~/pages/Home';
import DanhSachShopMoi from '~/pages/QuanLyCuaHang/ShopMoi/DanhSachShopMoi';
import ChiTietShopMoi from '~/pages/QuanLyCuaHang/ShopMoi/ChiTietShopMoi';
import danhMucCes from '~/pages/QuanLyDanhMucCuaHang/DanhMucCes';
import Page404 from '~/pages/Page404';
import QuanLyNhomQuyen from '~/pages/QuanLyHeThong/QuanLyNhomQuyen';
import ThemMoiNhomQuyen from '~/pages/QuanLyHeThong/QuanLyNhomQuyen/ThemMoiNhomQuyen';
import QuanLyDanhMuc from '~/pages/QuanLyHeThong/QuanLyDanhMuc';
import QuanLyChiTietDanhMuc from '~/pages/QuanLyHeThong/QuanLyDanhMuc/ChiTietDanhMuc';
import Search from 'antd/es/transfer/search';
import DanhMucMcc from '~/pages/QuanLyDanhMucCuaHang/DanhMucMcc';
import LyDoPending from '~/pages/ThamSoHeThong/LyDoPending';
import LyDoTuChoiDuyet from '~/pages/ThamSoHeThong/LyDoTuChoiDuyet';
import LyDoKhachHangReport from '~/pages/ThamSoHeThong/LyDoKhachHangReport';
import DanhSachThuongHieu from '~/pages/QuanLyThuongHieu/DanhSachThuongHieu';
import Null from '~/layouts/Null';
import DanhSachShopChoCapNhat from '~/pages/QuanLyCuaHang/ShopChoCapNhat/DanhSachShopChoCapNhat';
import ChiTietShopChoCapNhat from '~/pages/QuanLyCuaHang/ShopChoCapNhat/ChiTietShopChoCapNhat';
import DanhSachShopChoDuyet from '~/pages/QuanLyCuaHang/ShopChoDhuyet/DanhSachShopChoDuyet';
import ChiTietShopChoDuyet from '~/pages/QuanLyCuaHang/ShopChoDhuyet/ChiTietShopChoDuyet';
import DanhSachShopDaDuyet from '~/pages/QuanLyCuaHang/ShopDaDuyet/DanhSachShopDaDuyet';
import ChiTietShopDaDuyet from '~/pages/QuanLyCuaHang/ShopDaDuyet/ChiTietShopDaDuyet';
import DanhSachShopPending from '~/pages/QuanLyCuaHang/ShopPending/DanhSachShopPending';
import ChiTietShopPending from '~/pages/QuanLyCuaHang/ShopPending/ChiTietShopPending';
import BaoCaoHieuSuat from '~/pages/BaoCao/BaoCaoHieuSuat';
import BaoCaoThoiGianXuLy from '~/pages/BaoCao/BaoCaoThoiGianXuLy';
import BaoCaoCTNoiDungBiTuCHoi from '~/pages/BaoCao/BaoCaoCTNoiDungBiTuCHoi';
// Public routes
const publicRoutes = [
    { path: '/login', component: Login, layout: Null },
    { path: '/', component: Home },
    { path: 'quan-ly-cua-hang/danh-sach-shop-moi', component: DanhSachShopMoi },
    { path: 'quan-ly-cua-hang/danh-sach-shop-moi/chi-tiet/:id', component: ChiTietShopMoi },
    { path: 'quan-ly-cua-hang/danh-sach-shop-cho-cap-nhat', component: DanhSachShopChoCapNhat },
    { path: 'quan-ly-cua-hang/danh-sach-shop-cho-cap-nhat/chi-tiet/:id', component: ChiTietShopChoCapNhat },
    { path: 'quan-ly-cua-hang/danh-sach-shop-cho-duyet', component: DanhSachShopChoDuyet},
    { path: 'quan-ly-cua-hang/danh-sach-shop-cho-duyet/chi-tiet/:id', component: ChiTietShopChoDuyet },
    { path: 'quan-ly-cua-hang/danh-sach-shop-da-duyet', component: DanhSachShopDaDuyet},
    { path: 'quan-ly-cua-hang/danh-sach-shop-da-duyet/chi-tiet/:id', component: ChiTietShopDaDuyet },
    { path: 'quan-ly-cua-hang/danh-sach-shop-pending', component: DanhSachShopPending},
    { path: 'quan-ly-cua-hang/danh-sach-shop-pending/chi-tiet/:id', component: ChiTietShopPending },
    { path: 'quan-ly-danh-muc-cua-hang/danh-muc-mcc', component: DanhMucMcc },
    { path: 'quan-ly-danh-muc-cua-hang/danh-muc-ces', component: danhMucCes },
    { path: 'quan-ly-danh-muc-cua-hang/danh-muc-ces/cesdemo/list', component: Search },
    { path: 'quan-ly-thuong-hieu/danh-sach-thuong-hieu', component: DanhSachThuongHieu },
    { path: 'quan-ly-he-thong/quan-ly-nhom-quyen', component: QuanLyNhomQuyen },
    { path: 'quan-ly-he-thong/quan-ly-nhom-quyen/them-moi-nhom-quyen', component: ThemMoiNhomQuyen },
    { path: 'quan-ly-he-thong/quan-ly-danh-muc', component: QuanLyDanhMuc },
    { path: 'quan-ly-he-thong/quan-ly-danh-muc/chi-tiet/:id', component: QuanLyChiTietDanhMuc },
    { path: 'tham-so-he-thong/ly-do-pending', component: LyDoPending },
    { path: 'tham-so-he-thong/ly-do-tu-choi-duyet', component: LyDoTuChoiDuyet },
    { path: 'tham-so-he-thong/ly-do-khach-hang-report', component: LyDoKhachHangReport },
    { path: 'bao-cao/bao-cao-hieu-suat', component: BaoCaoHieuSuat },
    { path: 'bao-cao/bao-cao-thoi-gian-xu-ly', component: BaoCaoThoiGianXuLy },
    { path: 'bao-cao/bao-cao-chi-tiet-noi-dung-bi-tu-choi', component: BaoCaoCTNoiDungBiTuCHoi },
    { path: '/*', component: Page404, layout: Null},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
