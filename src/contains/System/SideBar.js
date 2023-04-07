import React from 'react';
import anoAvatar from '~/assets/images/avatar.jpg';
import { useSelector } from 'react-redux';
import menuSideBar from '~/ultils/menuSideBar';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import * as actions from '~/store/actions';
import icons from '~/assets/icons';

const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons;
const active = 'hover:bg-gray-300 flex rounded-md items-center py-2 gap-2 font-bold bg-gray-200';
const nonAcitve = 'hover:bg-gray-300 flex rounded-md items-center gap-2 py-2 cursor-pointer';

const SideBar = () => {
    const dispath = useDispatch();
    const { currentData } = useSelector((state) => state.user);
    return (
        <div className="w-[256px] flex-none p-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <img
                        src={anoAvatar}
                        alt="avatar"
                        className="w-12 h-12 object-cover rounded-full border-2 border-white"
                    />
                    <div className="flex flex-col justify-center">
                        <span className=" font-semibold">{currentData?.name}</span>
                        <smail>{currentData?.phone}</smail>
                    </div>
                </div>
                <span>
                    Mã thành viên:
                    <small className="font-bold"> {currentData?.id?.match(/\d/g).join('').slice(0, 6)}</small>
                </span>
            </div>
            <div>
                {menuSideBar?.map((item) => {
                    return (
                        <NavLink
                            className={({ isActive }) => (isActive ? active : nonAcitve)}
                            to={item?.path}
                            key={item?.id}
                        >
                            {item?.icon}
                            {item?.text}
                        </NavLink>
                    );
                })}
                <span className={nonAcitve} onClick={() => dispath(actions.logout())}>
                    <AiOutlineLogout />
                    Thoát{' '}
                </span>
            </div>
        </div>
    );
};

export default SideBar;
