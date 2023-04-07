import React from 'react';
import { Address, Overview } from '~/components';
import { BsCameraFill } from 'react-icons/bs';
const CreatePost = () => {
    return (
        <div className="px-6 ">
            <h1 className="text-3xl font-medium py-4 border-b border-gray-200">Đăng tin mới</h1>
            <div className="flex gap-4">
                <div className="py-4 flex flex-col gap-8 flex-auto">
                    <Address />
                    <Overview />
                    <div className="w-full">
                        <h2 className="font-semibold text-xl py-4">Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className="w-full">
                            <label
                                className="w-full border-2 flex items-center gap-4 flex-col justify-center rounded-md my-4 h-[200px] border-dashed border-gray-400"
                                htmlFor="file"
                            >
                                <BsCameraFill size={50} color="blue" />
                                Thêm ảnh
                            </label>
                            <input hidden type="file" id="file" />
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex-none">map</div>
            </div>
        </div>
    );
};

export default CreatePost;
