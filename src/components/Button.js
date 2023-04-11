import React, { memo } from 'react';

function Button({ text, textColor, bgColor, IcAfter, onClick, px, type }) {
    return (
        <button
            type={type || 'button'}
            className={`py-2 ${
                px ? px : 'px-2'
            } ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
            onClick={onClick}
        >
            <span>{text}</span>

            <span>{IcAfter && <IcAfter />}</span>
        </button>
    );
}

export default memo(Button);
