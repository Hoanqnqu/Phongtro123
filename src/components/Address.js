import React, { useEffect, useState } from 'react';
import SelectAddress from './SelectAddress';
import { apiGetPublicDistricts, apiGetPublicProvinces } from '~/services';
const Address = () => {
    const [provinces, setProvinces] = useState([]);
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
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
        setDistrict(null);
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
    return (
        <div>
            <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
            <div className=" flex flex-col gap-4">
                <div className="flex  items-center gap-4">
                    <SelectAddress
                        type="province"
                        value={province}
                        setValue={setProvince}
                        label={'Tỉnh/ Thành phố'}
                        options={provinces}
                    />
                    <SelectAddress
                        reset={reset}
                        type={'district'}
                        value={district}
                        setValue={setDistrict}
                        label={'Quận/ Huyện'}
                        options={districts}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="exactly-address" className="font-medium">
                    Địa chỉ chính xác
                </label>
                <input
                    id="exactly-address"
                    type="text"
                    readOnly
                    value={`${
                        district
                            ? `${
                                  districts.find((districtItem) => districtItem?.district_id === district).district_name
                              },`
                            : ''
                    } ${province ? `${provinces?.find((item) => item.province_id === province).province_name} ` : ''}`}
                    className="border border-gray-200 rounded-md outline-none bg-gray-100 p-2 w-full"
                />
            </div>
        </div>
    );
};

export default Address;
