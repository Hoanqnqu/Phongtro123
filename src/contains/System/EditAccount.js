import React from 'react';
import { Button, InputFormV2 } from '~/components';
import InputReadOnly from '~/components/InputReadOnly';

const EditAccount = () => {
    return (
        <div className="px-6 flex flex-col items-center ">
            <h1 className="text-3xl w-full text-start font-medium py-4 border-b border-gray-200">
                Chỉnh sửa thông tin cá nhân
            </h1>
            <div className="w-3/5 py-6 flex flex-col gap-4">
                <InputReadOnly direction={'flex-row'} label={'Mã thành viên'} />
                <InputReadOnly direction={'flex-row'} label={'Số điện thoại'} />
                <small className="flex-auto text-blue-500 cursor-pointer ml-48">đổi số điện thoại</small>
                <InputFormV2 label={'Tên hiển thị'} direction={'flex-row'} />
                <InputFormV2 label={'Email'} direction={'flex-row'} />
                <InputFormV2 label={'Zalo'} direction={'flex-row'} />
                <InputFormV2 label={'Facebook'} direction={'flex-row'} />
                <div className="flex">
                    <label className="w-48 flex-none" htmlFor="password">
                        Mật khẩu
                    </label>
                    <small className="flex-auto text-blue-500 cursor-pointer h-12">Đổi mật khẩu</small>
                </div>
                <div className="flex mb-12">
                    <label lassName="w-48 flex-none" htmlFor="avatar">
                        Ảnh đại diện
                    </label>
                    <img src="" alt="" className="ml-28 w-28 h-28 rounded-full object-cover" />
                </div>
                <Button text={'cập nhật'} bgColor={'bg-blue-600'} textColor={'text-white'} />
            </div>
        </div>
    );
};

export default EditAccount;
