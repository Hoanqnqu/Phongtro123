import React, { useState } from 'react';
import { Address, Button, Loading, Overview } from '~/components';
import { apiUploadImages } from '~/services';
import icons from '~/assets/icons';
import { getCodesArea, getCodesPrice } from '~/ultils/common/getCodes';
import { useSelector } from 'react-redux';
import { apiCreatePost } from '~/services';
const { BsCameraFill, ImBin } = icons;

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
    const { prices, areas, provinces, categories } = useSelector((state) => state.app);
    const { currentData } = useSelector((state) => state.user);
    const [isLoading, setIsLoading] = useState(false);
    const [imagesPreview, setImagesPreview] = useState([]);
    const handleFiles = async (e) => {
        setIsLoading(true);
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
        setIsLoading(false);

        setImagesPreview((prev) => [...prev, ...images]);
        setPayload((prev) => ({ ...prev, images: [...payload.images, ...images] }));
    };
    const handleDeleteImage = (image) => {
        setImagesPreview((prev) => prev?.filter((item) => item !== image));
        setPayload((prev) => ({ ...prev, images: prev.images?.filter((item) => item !== image) }));
    };
    const handleSubmit = async () => {
        let priceCodeArr = getCodesPrice(+payload.priceNumber / Math.pow(10, 6), prices, 1, 15);
        let priceCode = priceCodeArr[0]?.code;
        let areaCodeArr = getCodesArea(+payload.areaNumber, areas, 20, 90);
        let areaCode = areaCodeArr[0]?.code;
        let finalPayload = {
            ...payload,
            priceCode,
            areaCode,
            userId: currentData.id,
            priceNumber: +payload.priceNumber / Math.pow(10, 6),
            target: payload.target || 'Tất cả',
            label: `${categories?.find((item) => item.code === payload?.categoryCode)?.value} ${
                payload?.address?.split(',')[0]
            }`,
        };
        console.log(finalPayload);
        const response = await apiCreatePost(finalPayload);
        console.log(response);
    };

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
                                {isLoading ? (
                                    <Loading />
                                ) : (
                                    <div className="flex flex-col justify-center items-center">
                                        <BsCameraFill size={50} color="blue" />
                                        Thêm ảnh
                                    </div>
                                )}
                            </label>
                            <input onChange={handleFiles} hidden type="file" id="file" multiple />
                            <div className="w-full mb-6">
                                <h3 className="font-medium">Ảnh đã chọn</h3>
                                <div className="flex    ">
                                    {imagesPreview?.map((item) => (
                                        <div key={item} className="relative w-1/3 h-1/3 ">
                                            <img
                                                src={item}
                                                alt="preview"
                                                className=" object-cover rounded-md w-full h-full"
                                            />
                                            <span
                                                title="Xóa"
                                                onClick={() => handleDeleteImage(item)}
                                                className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 rounded-full hover:bg-slate-500"
                                            >
                                                {' '}
                                                <ImBin />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button
                                text={'Tạo mới'}
                                onClick={handleSubmit}
                                bgColor={'bg-green-500'}
                                textColor={'text-white'}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex-none">map</div>
            </div>
        </div>
    );
};

export default CreatePost;
