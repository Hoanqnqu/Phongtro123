import React, { memo } from 'react';

const SelectAddress = ({ label }) => {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <label className="font-medium" htmlFor="select-address">
                {label}
            </label>
            <select
                id="select-address"
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">{`--Chọn ${label}--`}</option>
                
            </select>
         
        </div>
    );
};

export default memo(SelectAddress);
