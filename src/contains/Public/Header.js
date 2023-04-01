import React, { useCallback, useEffect, useRef, useState } from 'react';
import Logo from '~/assets/images/logo.svg';
import icons from '~/assets/icons';
import { Button, User } from '~/components';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { path } from '~/ultils/containt';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '~/store/actions';
import menuManage from '~/ultils/menuManage';

const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons;
function Header() {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const { currentData } = useSelector((state) => state.user);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [searchParams] = useSearchParams();
    const headerRef = useRef();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } });
    }, []);

    useEffect(() => {
        headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [searchParams.get('page')]);
    return (
        <div ref={headerRef} className="w-3/5 flex items-center justify-between">
            <Link to="/">
                <img src={Logo} alt="logo" className="w-[240px] h-[70px] object-contain" />
            </Link>
            <div className="flex items-center gap-1">
                {!isLoggedIn && (
                    <div className="flex items-center gap-1">
                        <small>Phongtro123.com xin chào !</small>

                        <Button
                            text="Đăng nhập"
                            textColor="text-white"
                            bgColor="bg-[#3961fb]"
                            onClick={() => goLogin(false)}
                        />
                        <Button
                            text="Đăng ký"
                            textColor="text-white"
                            bgColor="bg-[#3961fb]"
                            onClick={() => goLogin(true)}
                        />
                    </div>
                )}
                {isLoggedIn && (
                    <div className="flex items-center gap-3 relative">
                        <User />

                        <Button
                            text="Quản lí tài khoản"
                            textColor="text-white"
                            bgColor="bg-[#3961fb]"
                            px="px-4"
                            IcAfter={BsChevronDown}
                            onClick={() => setIsShowMenu((prev) => !prev)}
                        />
                        {isShowMenu && (
                            <div className="absolute min-w-200 top-full bg-white shadow-md rounded-md p-4 right-0 flex flex-col ">
                                {menuManage.map((item) => {
                                    return (
                                        <Link
                                            className=" hover:text-orange-500 text-blue-600 border-b py-2 border-gray-200 flex items-center gap-2"
                                            to={item?.path}
                                            key={item?.id}
                                        >
                                            {item?.icon}
                                            {item?.text}
                                        </Link>
                                    );
                                })}
                                <span
                                    className="cursor-pointer hover:text-orange-500 text-blue-600  border-gray-200 flex items-center gap-2"
                                    onClick={() => {
                                        dispath(actions.logout());
                                        setIsShowMenu(false);
                                    }}
                                >
                                    <AiOutlineLogout />
                                    Đăng xuất
                                </span>
                            </div>
                        )}
                    </div>
                )}
                <Button
                    text="Đăng tin mới"
                    textColor="text-white"
                    bgColor="bg-secondary2"
                    IcAfter={AiOutlinePlusCircle}
                />
            </div>
        </div>
    );
}

export default Header;
