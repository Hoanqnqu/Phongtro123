import React from 'react';
import SelectAddress from './SelectAddress';

const Address = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
            <div className=" flex flex-col gap-4">
                <div className="flex  items-center gap-4">
                    <SelectAddress label={'Tỉnh/ Thành phố'} />
                    <SelectAddress label={'Quận/ Huyện'} />
                </div>
            </div>
            <input
                type="text"
                value={'123'}
                readOnly
                className="border border-gray-200 rounded-md outline-none bg-gray-100 p-2 w-full"
            />
        </div>
    );
};

export default Address;
