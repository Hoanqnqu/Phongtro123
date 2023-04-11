import React, { useEffect, useState, memo } from 'react';
import Select from './Select';
import { apiGetPublicDistricts, apiGetPublicProvinces } from '~/services';
import InputReadOnly from './InputReadOnly';
const Address = ({ payload, setPayload }) => {
    const [provinces, setProvinces] = useState([]);
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces();
            if (response.status === 200) setProvinces(response?.data?.results);
        };
        fetchPublicProvince();
    }, []);
    useEffect(() => {
        setDistrict('');
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistricts(province);
            if (response.status === 200) setDistricts(response?.data?.results);
        };

        if (province) {
            setReset(false);
            fetchPublicDistrict();
        }
        if (!province) {
            setReset(true);
            setDistricts([]);
        }
    }, [province]);

    useEffect(() => {
        setPayload((prev) => ({
            ...prev,
            address: `${
                district
                    ? `${districts.find((districtItem) => districtItem?.district_id === district).district_name},`
                    : ''
            } ${province ? `${provinces?.find((item) => item.province_id === province).province_name} ` : ''}`,
            province: province ? provinces?.find((item) => item.province_id === province).province_name : '',
        }));
    }, [province, district]);
    return (
        <div>
            <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
            <div className=" flex flex-col gap-4">
                <div className="flex  items-center gap-4">
                    <Select
                        type="province"
                        value={province}
                        setValue={setProvince}
                        label={'Tỉnh/ Thành phố'}
                        options={provinces}
                    />
                    <Select
                        reset={reset}
                        type={'district'}
                        value={district}
                        setValue={setDistrict}
                        label={'Quận/ Huyện'}
                        options={districts}
                    />
                </div>
            </div>
            <InputReadOnly
                label={'Địa chỉ chính xác'}
                value={`${
                    district
                        ? `${districts.find((districtItem) => districtItem?.district_id === district).district_name},`
                        : ''
                } ${province ? `${provinces?.find((item) => item.province_id === province).province_name} ` : ''}`}
            />
        </div>
    );
};

export default memo(Address);
