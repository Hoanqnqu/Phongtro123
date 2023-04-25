import React, { memo } from 'react';

function InputForm({ label, value, setValue, name, invalidFields, setInvalidField, type = 'text' }) {
    return (
        <div>
            <label htmlFor="phone" className="text-xs">
                {label}
            </label>
            <input
                type={type}
                id="phone"
                value={value}
                onFocus={() => setInvalidField && setInvalidField([])}
                onChange={(e) => {
                    setValue((prev) => ({ ...prev, [name]: e.target.value }));
                }}
                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
            />
            {invalidFields?.some((i) => i.name === name) && (
                <small className="text-red-500 italic">{invalidFields.find((i) => i.name === name)?.message}</small>
            )}
        </div>
    );
}

export default memo(InputForm);
