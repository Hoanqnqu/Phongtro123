import icons from '~/assets/icons';
const { ImPencil2, MdOutlineLibraryBooks, BiUserPin } = icons;

const menuSideBar = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: '/he-thong/tao-moi-tin-dang',
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
        text: 'Sửa thông tin cá nhân',
        path: '/he-thong/sua-thong-tin-ca-nhan',
        icon: <BiUserPin />,
    },
    {
        id: 4,
        text: 'Liên hệ',
        path: '/he-thong/lien-he',
        icon: <BiUserPin />,
    },
   
];
export default menuSideBar;
