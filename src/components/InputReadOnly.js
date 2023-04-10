import React from 'react';

const InputReadOnly = ({ label, value }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="exactly-address" className="font-medium">
                {label}
            </label>
            <input
                id="exactly-address"
                type="text"
                readOnly
                value={value ? value : ''}
                className="border border-gray-200 rounded-md outline-none bg-gray-100 p-2 w-full"
            />
        </div>
    );
};

export default InputReadOnly;
