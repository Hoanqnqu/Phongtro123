import { clearConfigCache } from 'prettier';
import React, { useEffect, useState } from 'react';
import icons from '~/assets/icons';
import Item from './Item';
const { GrLinkPrevious } = icons;
const Modal = ({ setIsShowModal, content, name }) => {
    const [percent1, setPercent1] = useState(0);
    const [percent2, setPercent2] = useState(100);
    const [activeEl, setActiveEl] = useState();
    useEffect(() => {
        const aciveTrackEl = document.getElementById('track-active');
        let minPercent = percent1 <= percent2 ? percent1 : percent2;
        let maxPercent = percent2 <= percent1 ? 100 - percent1 : 100 - percent2;
        if (aciveTrackEl) {
            aciveTrackEl.style.left = `${minPercent}%`;
            aciveTrackEl.style.right = `${maxPercent}%`;
        }
    }, [percent1, percent2]);

    const handleClickTrack = (e, value) => {
        const stackEl = document.getElementById('track');
        const stackRect = stackEl.getBoundingClientRect();
        let percent = value ? value : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
        if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
            setPercent1(percent);
        } else {
            setPercent2(percent);
        }
    };

    const convert100toTarget = (percent) => {
        return name === 'Chọn giá'
            ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
            : name === 'Chọn diện tích'
            ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
            : 0;
    };
    const convert15to100 = (percent) => {
        let target = name === 'Chọn giá' ? 15 : name === 'Chọn diện tích' ? 90 : 1;
        return Math.floor((percent / target) * 100);
    };

    const getNumbers = (strng) =>
        strng
            .split(' ')
            .map((item) => +item)
            .filter((item) => !item === false);
    const getNumbersArea = (strng) => {
        return strng
            .split(' ')
            .map((item) => +item.match(/\d+/))
            .filter((item) => item !== 0);
    };
    const handleActive = (code, value) => {
        setActiveEl(code);
        let arrMaxMin = name === 'Chọn giá' ? getNumbers(value) : getNumbersArea(value);
        if (arrMaxMin.length === 1) {
            if (arrMaxMin[0] === 1) {
                setPercent1(0);
                setPercent2(convert15to100(1));
            }
            if (arrMaxMin[0] === 20) {
                setPercent1(0);
                setPercent2(convert15to100(20));
            }
            if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
                setPercent1(100);
                setPercent2(100);
            }
        }
        if (arrMaxMin.length === 2) {
            setPercent1(convert15to100(arrMaxMin[0]));
            setPercent2(convert15to100(arrMaxMin[1]));
        }
    };
    const handleSubmit = () => {
        console.log('start', convert100toTarget(percent1));
        console.log('end', convert100toTarget(percent2));
    };
    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 flex z-20 justify-center items-center "
            onClick={() => setIsShowModal(false)}
        >
            <div
                className="w-2/5 bg-white rounded-md"
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
                                {`Từ ${
                                    percent1 <= percent2 ? convert100toTarget(percent1) : convert100toTarget(percent2)
                                } - ${
                                    percent1 <= percent2 ? convert100toTarget(percent2) : convert100toTarget(percent1)
                                } ${name === 'Chọn giá' ? 'Chọn giá' : name === 'Chọn diện tích' ? 'm2' : ''}`}
                            </div>
                            <div
                                id={'track'}
                                onClick={handleClickTrack}
                                className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full "
                            ></div>
                            <div
                                id="track-active"
                                onClick={handleClickTrack}
                                className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full "
                            ></div>

                            <input
                                max="100"
                                min="0"
                                step="1"
                                type="range"
                                value={percent1}
                                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                                onChange={(e) => {
                                    setPercent1(+e.target.value);
                                    activeEl && setActiveEl('');
                                }}
                            />
                            <input
                                max="100"
                                min="0"
                                step="1"
                                type="range"
                                value={percent2}
                                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                                onChange={(e) => {
                                    setPercent2(+e.target.value);
                                    activeEl && setActiveEl('');
                                }}
                            />
                            <div className="absolute z-30 top-6 left-0 right-0  flex justify-between items-center">
                                <span
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClickTrack(e, 0);
                                    }}
                                >
                                    0
                                </span>
                                <span
                                    className="mr-[-12px] cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClickTrack(e, 100);
                                    }}
                                >
                                    {name === 'Chọn giá' ? '15 triệu +' : name === 'Chọn diện tích' ? 'Trên 90 m2' : ''}
                                </span>
                            </div>
                        </div>
                        <div className="mt-24 ">
                            <h4 className="font-medium mb-4">Chọn nhanh</h4>
                            <div className="flex gap-1 items-center flex-wrap w-full">
                                {content?.map((item) => {
                                    return (
                                        <button
                                            key={item.code}
                                            onClick={() => handleActive(item.code, item.value)}
                                            className={`px-4 py-2 bg-gray-200 rounded-md ${
                                                item.code === activeEl ? 'bg-blue-500 text-white ' : ' '
                                            }cursor-pointer `}
                                        >
                                            {item.value}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {(name === 'Chọn giá' || name === 'Chọn diện tích') && (
                    <button
                        type="button"
                        className="w-full bg-[#FFA500] py-2 font-medium rounded-bl-md rounded-br-md capitalize"
                        onClick={handleSubmit}
                    >
                        ÁP DỤNG
                    </button>
                )}
            </div>
        </div>
    );
};

export default Modal;
