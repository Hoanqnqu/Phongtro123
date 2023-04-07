import icons from '~/assets/icons';
const { ImPencil2, MdOutlineLibraryBooks, BiUserPin } = icons;

const menuManage = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: '/he-thong/tao-moi-bai-dang',
        icon: <ImPencil2 />,
    },
    {
        id: 2,
        text: 'Quản lí tin đăng',
        path: '/he-thong/quan-li-bai-dang',
        icon: <MdOutlineLibraryBooks />,
    },
    {
        id: 3,
        text: 'Thông tin tài khoản',
        path: '/he-thong/thong-tin-tai-khoan',
        icon: <BiUserPin />,
    },
];
export default menuManage;