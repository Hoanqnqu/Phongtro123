import React from 'react';
import { useSelector } from 'react-redux';
import avatar from '~/assets/images/avatar.jpg';
import { blobToBase64 } from '~/ultils/common/toBase64';

const User = () => {
    const { currentData } = useSelector((state) => state.user);
    return (
        <div className="flex items-center gap-2">
            <img
                src={currentData?.avatar ? blobToBase64(currentData?.avatar) : avatar}
                alt="avatar"
                className="w-10 object-cover rounded-full h-10 border-2 border-white shadow-md "
            />
            <div className="flex flex-col ">
                <span>
                    Xin chào, <span className="font-semibold">{currentData?.name}</span>
                </span>
                <span>
                    Mã tài khoản: <span className="font-semibold">{`${currentData?.id?.slice(0, 10)}...`}</span>
                </span>
            </div>
        </div>
    );
};

export default User;
