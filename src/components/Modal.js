import React, { useEffect, useState } from 'react';
import icons from '~/assets/icons';
import Item from './Item';
const { GrLinkPrevious } = icons;
const Modal = ({ setIsShowModal, content, name }) => {
    const [percent1, setPercent1] = useState(0);
    const [percent2, setPercent2] = useState(100);

    useEffect(() => {
        const aciveTrackEl = document.getElementById('track-active');
        let minPercent = percent1 <= percent2 ? percent1 : percent2;
        let maxPercent = percent2 <= percent1 ? 100 - percent1 : 100 - percent2;
        if (aciveTrackEl) {
            aciveTrackEl.style.left = `${minPercent}%`;
            aciveTrackEl.style.right = `${maxPercent}%`;
        }
    }, [percent1, percent2]);

    const handleClickStack = (e) => {
        const stackEl = document.getElementById('track');
        const stackRect = stackEl.getBoundingClientRect();
        let percent = Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
        if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
            setPercent1(percent);
        } else {
            setPercent2(percent);
        }
    };

    const cover100to15 = (percent) => {
        return (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10;
    };
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
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsShowModal(false);
                        }}
                    >
                        <GrLinkPrevious size={24} />
                    </span>
                </div>
                {(name === 'Phòng trọ, nhà trọ' || name === 'Toàn quốc') && (
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
                )}

                {(name === 'Chọn giá' || name === 'Chọn diện tích') && (
                    <div className="p-12 py-20">
                        <div className="flex flex-col items-center justify-center relative">
                            <div className="z-30 absolute top-[-48px] font-bold text-lg text-orange-600">
                                {`Từ ${percent1 <= percent2 ? cover100to15(percent1) : cover100to15(percent2)} - ${
                                    percent1 <= percent2 ? cover100to15(percent2) : cover100to15(percent1)
                                } triệu`}
                            </div>
                            <div
                                id={'track'}
                                onClick={handleClickStack}
                                className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full "
                            ></div>
                            <div
                                id="track-active"
                                onClick={handleClickStack}
                                className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full "
                            ></div>

                            <input
                                max="100"
                                min="0"
                                step="1"
                                type="range"
                                value={percent1}
                                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                                onChange={(e) => setPercent1(+e.target.value)}
                            />
                            <input
                                max="100"
                                min="0"
                                step="1"
                                type="range"
                                value={percent2}
                                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                                onChange={(e) => setPercent2(+e.target.value)}
                            />
                            <div className="absolute z-30 top-6 left-0 right-0  flex justify-between items-center">
                                <span className="">0</span>
                                <span className="mr-[-12px]">15 triệu +</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
