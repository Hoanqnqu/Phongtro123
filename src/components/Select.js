import React, { memo } from 'react';

const Select = ({ label, options, value, setValue, type, reset }) => {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <label className="font-medium" htmlFor="select-address">
                {label}
            </label>
            <select
                value={reset ? '' : value ? value : ''}
                onChange={(e) => setValue(e.target.value)}
                id="select-address"
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">{`--Chọn ${label}--`}</option>
                {options?.map((item) => {
                    return (
                        <option
                            key={
                                type === 'province'
                                    ? item?.province_id
                                    : type === 'district'
                                    ? item?.district_id
                                    : item.code
                            }
                            value={
                                type === 'province'
                                    ? item?.province_id
                                    : type === 'district'
                                    ? item?.district_id
                                    : item.code
                            }
                        >
                            {type === 'province'
                                ? item?.province_name
                                : type === 'district'
                                ? item?.district_name
                                : item.value}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default memo(Select);
