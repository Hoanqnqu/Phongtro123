import React, { useState } from 'react';
import { Button, InputFormV2 } from '~/components';
import InputReadOnly from '~/components/InputReadOnly';
import { useSelector } from 'react-redux';
import avatar from '~/assets/images/avatar.jpg';
import Swal from 'sweetalert2';
import { fileToBase64 } from '~/ultils/common/toBase64';
import { apiUpdateUser } from '~/services';
import { blobToBase64 } from '~/ultils/common/toBase64';
import { getCurrent } from '~/store/actions';
import { useDispatch } from 'react-redux';
const EditAccount = () => {
    const { currentData } = useSelector((state) => state.user);
    const dispath = useDispatch();
    const [payload, setPayload] = useState({
        name: currentData?.name || '',
        avatar: blobToBase64(currentData?.avatar),
        zalo: currentData?.zalo || '',
        fbUrl: currentData?.fbUrl || '',
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await apiUpdateUser(payload);

        if (response?.data.err === 0) {
            Swal.fire('Thành công', 'Update fail', 'success');
            dispath(getCurrent());
        } else {
            Swal.fire('Oops!', 'Có lỗi gì đó', 'error');
        }
    };
    const handleUploadFile = async (e) => {
        const imageBase64 = await fileToBase64(e.target.files[0]);
        setPayload((prev) => ({ ...prev, avatar: imageBase64 }));
    };
    return (
        <form onSubmit={handleSubmit} className="px-6 flex flex-col items-center ">
            <h1 className="text-3xl w-full text-start font-medium py-4 border-b border-gray-200">
                Chỉnh sửa thông tin cá nhân
            </h1>
            <div className="w-3/5 py-6 flex flex-col gap-4">
                <InputReadOnly
                    value={`#${currentData?.id?.match(/\d/g).join('').slice(0, 6) || ''}`}
                    direction={'flex-row'}
                    label={'Mã thành viên'}
                />
                <InputReadOnly value={currentData?.phone || ''} direction={'flex-row'} label={'Số điện thoại'} />
                <small className="flex-auto text-blue-500 cursor-pointer ml-48">đổi số điện thoại</small>
                <InputFormV2
                    name={'name'}
                    setValue={setPayload}
                    value={payload.name}
                    label={'Tên hiển thị'}
                    direction={'flex-row'}
                />

                <InputFormV2
                    name="zalo"
                    setValue={setPayload}
                    value={payload.zalo}
                    label={'Zalo'}
                    direction={'flex-row'}
                />
                <InputFormV2
                    name="fbUrl"
                    setValue={setPayload}
                    value={payload.fbUrl}
                    label={'Facebook'}
                    direction={'flex-row'}
                />
                <div className="flex">
                    <label className="w-48 flex-none" htmlFor="password">
                        Mật khẩu
                    </label>
                    <small className="flex-auto text-blue-500 cursor-pointer h-12">Đổi mật khẩu</small>
                </div>
                <div className="flex mb-12">
                    <label className="w-48 flex-none" htmlFor="avatar">
                        Ảnh đại diện
                    </label>
                    <div>
                        <img src={payload?.avatar || avatar} alt="" className=" w-28 h-28 rounded-full object-cover" />
                        <input onChange={handleUploadFile} type="file" className="appearance-none my-4" id="avatar" />
                    </div>
                </div>
                <Button type="submit" text={'cập nhật'} bgColor={'bg-blue-600'} textColor={'text-white'} />
            </div>
        </form>
    );
};

export default EditAccount;
