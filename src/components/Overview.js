import React from 'react';
import Select from './Select';
import { useSelector } from 'react-redux';
import InputReadOnly from './InputReadOnly';
import InputFormV2 from './InputFormV2';

const targets = [
    { code: 'Nam', value: 'Nam' },
    { code: 'Nữ', value: 'Nữ' },
    { code: 'Tất cả', value: 'Tất cả' },
];
const Overview = ({ payload, setPayload }) => {
    const { dataEdit } = useSelector((state) => state.post);

    const { categories } = useSelector((state) => state.app);
    const { currentData } = useSelector((state) => state.user);
    return (
        <div>
            <h2 className="font-semibold text-xl py-4">Thông tin mô tả</h2>
            <div className="w-full flex flex-col gap-4">
                <div className="w-1/2">
                    <Select
                        className="w-1/2"
                        label={'Loại chuyên mục'}
                        name={'categoryCode'}
                        setValue={setPayload}
                        options={categories}
                        value={payload?.categoryCode}
                    />
                </div>
                <InputFormV2 label={'Tiêu đề'} value={payload?.title} setValue={setPayload} name="title" />
                <div className="flex flex-col gap-2">
                    <label htmlFor="desc">Nội dung mô tả</label>
                    <textarea
                        value={payload?.description}
                        onChange={(e) => setPayload((prev) => ({ ...prev, description: e.target.value }))}
                        id="desc"
                        cols={30}
                        rows="10"
                        className="w-full rounded-md outline-none border border-gray-300 p-2"
                    ></textarea>
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                    <InputReadOnly label={'Thông tin liên hệ'} value={currentData?.name || currentData?.username} />
                    <InputReadOnly label={'Điện thoai'} value={currentData?.phone} />
                    <InputFormV2
                        label={'Giá cho thuê'}
                        unit={'đồng'}
                        small="Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000 "
                        value={payload?.priceNumber}
                        setValue={setPayload}
                        name="priceNumber"
                        type="number"
                    />
                    <InputFormV2
                        label={'Diện tích'}
                        unit={'m2'}
                        value={payload?.areaNumber}
                        setValue={setPayload}
                        name="areaNumber"
                        type="number"
                    />
                    <Select
                        label={'Đối tượng cho thuê'}
                        options={targets}
                        value={payload?.target}
                        setValue={setPayload}
                        name="target"
                        isRequired={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Overview;
