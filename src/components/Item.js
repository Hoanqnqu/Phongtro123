import React, { memo, useState } from 'react';

import icons from '~/assets/icons';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '~/ultils/common';
import { path } from '~/ultils/containt';
const indexs = [0, 1, 2, 3];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkFill } = icons;
function Item({ images, address, attributes, description, star, title, user, id }) {
    const stars = [];
    for (let i = 0; i < star; i++) {
        stars.push(i);
    }

    const [isHoverHeart, setIshoverHeart] = useState(false);

    return (
        <div className="w-full flex border-t border-orange-600 p-4 bg-[#fff9f3] ">
            <Link
                to={`${path.DETAIL}${formatVietnameseToString(title)}/${id}`}
                className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer"
            >
                {images.length > 0 &&
                    images
                        .filter((i, index) => indexs.some((i) => i === index))
                        ?.map((i, index) => {
                            return <img src={i} key={index} alt="preview" className="w-[47%] h-[120px] object-cover" />;
                        })}

                <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-4">
                    {`${images.length} ảnh`}
                </span>
                <span
                    className="text-white absolute right-5 bottom-1"
                    onMouseEnter={() => setIshoverHeart(true)}
                    onMouseLeave={() => setIshoverHeart(false)}
                >
                    {isHoverHeart ? <RiHeartFill size={26} color="red" /> : <RiHeartLine size={26} />}
                </span>
            </Link>
            <div className="w-3/5">
                <div className="flex justify-between gap-4 w-full ">
                    <Link
                        to={`${path.DETAIL}${formatVietnameseToString(title)}/${id}`}
                        className="text-red-600 font-medium"
                    >
                        {+star > 0 &&
                            stars.map((item, index) => {
                                return <GrStar key={index} className="star-item" size={18} color="yellow" />;
                            })}

                        {title}
                    </Link>
                    <div className="w-[10%] flex justify-end">
                        <BsBookmarkFill size={24} color="orange" />
                    </div>
                </div>
                <div className="my-2 flex items-center gap-2 justify-between">
                    <span className="font-bold text-green-600 flex-auto w-8 text-ellipsis whitespace-nowrap overflow-hidden">
                        {attributes.price}
                    </span>
                    <span className="flex-none">{attributes.acreage}</span>
                    <span className="flex-auto w-32  text-ellipsis whitespace-nowrap overflow-hidden">{`${
                        address?.split(',')[address?.split(',').length - 2]
                    }, ${address?.split(',')[address?.split(',').length - 1]}`}</span>
                </div>
                <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden  ">{description}</p>
                <div className="flex items-center my-5 justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                            alt="avatar"
                            className="w-[30px] h-[30px] object-cover rounded-full"
                        />
                        <p>{user.name}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            className="bg-blue-700 text-white  text-[14px]  px-[7px] py-[3px] rounded-md"
                        >
                            {`Gọi ${user.phone}`}
                        </button>
                        <button
                            type="button"
                            className="bg-white px-[7px] py-[3px] text-blue-700 border text-[14px] border-blue-700 rounded-md"
                        >
                            Nhắn zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Item);
