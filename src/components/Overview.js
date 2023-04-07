import React from 'react';
import Select from './Select';
import { useSelector } from 'react-redux';
import InputReadOnly from './InputReadOnly';
import InputFormV2 from './InputFormV2';

const targets = [
    { code: 'male', value: 'Nam' },
    { code: 'female', value: 'Nữ' },
];
const Overview = () => {
    const { categories } = useSelector((state) => state.app);
    const { currentData } = useSelector((state) => state.user);
    return (
        <div>
            <h2 className="font-semibold text-xl py-4">Thông tin mô tả</h2>
            <div className="w-full flex flex-col gap-4">
                <div className="w-1/2">
                    <Select className="w-1/2" label={'Loại chuyên mục'} options={categories} />
                </div>
                <InputFormV2 label={'Tiêu đề'} />
                <div className="flex flex-col gap-2">
                    <label htmlFor="desc">Nội dung mô tả</label>
                    <textarea
                        id="desc"
                        cols={30}
                        rows="10"
                        className="w-full rounded-md outline-none border border-gray-300 p-2"
                    ></textarea>
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                    <InputReadOnly label={'Thông tin liên hệ'} value={currentData?.name || currentData.username} />
                    <InputReadOnly label={'Điện thoai'} value={currentData?.phone} />
                    <InputFormV2 label={'Giá cho thuê'} unit={'đồng'} />
                    <InputFormV2 label={'Diện tích'} unit={'m2'} />
                    <Select label={'Đối tượng cho thuê'} options={targets} />
                </div>
                
            </div>
        </div>
    );
};

export default Overview;
