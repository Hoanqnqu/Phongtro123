import React, { useEffect, useState, memo } from 'react';
import Select from './Select';
import { apiGetPublicDistricts, apiGetPublicProvinces } from '~/services';
import InputReadOnly from './InputReadOnly';
import { useSelector } from 'react-redux';
import { editData } from '~/store/actions';
const Address = ({ payload, setPayload, isReset }) => {
    const { dataEdit } = useSelector((state) => state.post);
    const [provinces, setProvinces] = useState([]);
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if (dataEdit) {
            let addressArr = dataEdit?.address?.split(',');
            let foundProvince =
                provinces.length > 0 &&
                provinces?.find((item) => item.province_name === addressArr[addressArr.length - 1]?.trim());
            setProvince(foundProvince ? foundProvince.province_id : '');
        }
    }, [provinces, dataEdit]);
    useEffect(() => {
        if (dataEdit) {
            let addressArr = dataEdit?.address?.split(',');
            let foundDistrict =
                districts.length > 0 &&
                districts?.find((item) => item.district_name === addressArr[addressArr.length - 2]?.trim());
            setDistrict(foundDistrict ? foundDistrict.district_id : '');
        }
    }, [districts, dataEdit]);
    
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
        setProvince('');
    }, [isReset]);

    useEffect(() => {
        setPayload((prev) => ({
            ...prev,
            address: `${
                district
                    ? `${districts.find((districtItem) => districtItem?.district_id === district).district_name}, `
                    : ''
            }${province ? `${provinces?.find((item) => item.province_id === province).province_name} ` : ''}`,
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
