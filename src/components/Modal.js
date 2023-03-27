import React from 'react';
import icons from '~/assets/icons';
import Item from './Item';
const { GrLinkPrevious } = icons;
const Modal = ({ setIsShowModal, content, name }) => {
    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 flex z-20 justify-center items-center "
            onClick={() => setIsShowModal(false)}
        >
            <div
                className="w-1/3 bg-white rounded-md"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShowModal(true);
                }}
            >
                <div className="h-[45px] px-4 flex items-center border-b border-gray-200">
                    <span
                        className="cursor-pointer"
                        o
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsShowModal(false);
                        }}
                    >
                        <GrLinkPrevious size={24} />
                    </span>
                </div>
                <div className="flex flex-col p-4">
                    {content?.map((item) => {
                        return (
                            <span key={item.code} className="py-2 flex gap-2 items-center border-b border-gray-200">
                                <input type={'radio'} name={name} id={item.code} value={item.code} />
                                <label htmlFor={item.code}>{item.value}</label>
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Modal;
