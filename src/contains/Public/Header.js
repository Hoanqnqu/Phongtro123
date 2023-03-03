import React, { useCallback } from 'react';
import Logo from '~/assets/images/logo.svg';
import icons from '~/assets/icons';
import { Button } from '~/components';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '~/ultils/containt';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '~/store/actions';

const { AiOutlinePlusCircle } = icons;
function Header() {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } });
    }, []);
    return (
        <div className="w-3/5 flex items-center justify-between">
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
                    <div className="flex items-center gap-1">
                        <small>Hoàng đẹp trai !</small>

                        <Button
                            text="Đăng xuất"
                            textColor="text-white"
                            bgColor="bg-red-700"
                            onClick={() => dispath(actions.logout())}
                        />
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
