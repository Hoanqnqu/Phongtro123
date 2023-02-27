import React, { useCallback } from 'react';
import Logo from '~/assets/images/logo.svg';
import icons from '~/assets/icons';
import { Button } from '~/components';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '~/ultils/containt';

const { AiOutlinePlusCircle } = icons;
function Header() {
    const navigate = useNavigate();
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } });
    }, []);
    return (
        <div className="w-1100 flex items-center justify-between">
            <Link to="/">
                <img src={Logo} alt="logo" className="w-[240px] h-[70px] object-contain" />
            </Link>
            <div className="flex items-center gap-1">
                <small>Phongtro123.com xin chào !</small>
                <Button text="Đăng nhập" textColor="text-white" bgColor="bg-[#3961fb]" onClick={() => goLogin(false)} />
                <Button text="Đăng ký" textColor="text-white" bgColor="bg-[#3961fb]" onClick={() => goLogin(true)} />
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
