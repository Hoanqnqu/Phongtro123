import React, { memo } from 'react';

function InputForm({ label, value, setValue, type }) {
    return (
        <div>
            <label htmlFor="phone" className="text-xs">
                {label}
            </label>
            <input
                type="text"
                id="phone"
                value={value}
                onChange={(e) => {
                    setValue((prev) => ({ ...prev, [type]: e.target.value }));
                }}
                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
            />
        </div>
    );
}

export default memo(InputForm);
