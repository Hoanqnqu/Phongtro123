import React, { useState } from 'react';
import { Address, Overview } from '~/components';
import { BsCameraFill } from 'react-icons/bs';
import { apiUploadImages } from '~/services';
const CreatePost = () => {
    const [payload, setPayload] = useState({
        categoryCode: '',
        title: '',
        star: '',
        priceNumber: '',
        areaNumber: '',
        images: '',
        address: '',
        priceCode: '',
        areaCode: '',
        description: '',
        target: '',
        province: '',
    });
    const [imagesPreview, setImagesPreview] = useState([]);
    const handleFiles = async (e) => {
        let images = [];
        e.stopPropagation();
        const files = e.target.files;
        const formData = new FormData();
        for (let i of files) {
            formData.append('file', i);
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME);

            const response = await apiUploadImages(formData);
            if (response.status === 200) images = [...images, response?.data?.secure_url];
            console.log(images);
        }
        setImagesPreview(images);
        setPayload((prev) => ({ ...prev, images: JSON.stringify(images) }));
    };
    console.log(payload);
    return (
        <div className="px-6 ">
            <h1 className="text-3xl font-medium py-4 border-b border-gray-200">Đăng tin mới</h1>
            <div className="flex gap-4">
                <div className="py-4 flex flex-col gap-8 flex-auto">
                    <Address setPayload={setPayload} />
                    <Overview payload={payload} setPayload={setPayload} />
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
                            <input onChange={handleFiles} hidden type="file" id="file" multiple />
                            <div className="w-full">
                                <h3 className="font-medium">Ảnh đã chọn</h3>
                                <div className="flex    ">
                                    {imagesPreview?.map((item) => (
                                        <img src={item} alt="preview" className="w-1/3 h-1/3 object-cover rounded-md" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex-none">map</div>
            </div>
        </div>
    );
};

export default CreatePost;
