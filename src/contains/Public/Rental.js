import React, { useEffect, useState } from 'react';
import { List, Province, Pagination, ItemSidebar, RelatedPost } from '~/components';
import { text } from '~/ultils/containt';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formatVietnameseToString } from '~/ultils/common';
import * as actions from '~/store/actions';

function Rental({categoryCode}) {
    const [params] = useSearchParams();
    const { prices, areas, categories } = useSelector((state) => state.app);
    const [categoreCurrent, setCategoryCurrent] = useState('');
    // const [categoryCode, setCategoryCode] = useState(null);
    // const location = useLocation();
    // const dispath = useDispatch();
    console.log(categories);
    // useEffect(() => {
    //     const category = categories?.find((item) => `/${formatVietnameseToString(item.value)}` === location.pathname);
    //     setCategoryCurrent(category);
    //     if (category) {
    //         setCategoryCode(category.code);
    //     }
    // }, [location]);
    // useEffect(()=>{

    // },[location])

    console.log(categoryCode);

    return (
        <div className="w-full flex flex-col gap-3">
            <div>
                <h1 className="text-[28px] font-bold"> {categoreCurrent?.header}</h1>
                <p className="text-sm text-gray-700"> {categoreCurrent?.subheader}</p>
            </div>
            <Province />
            <div className="w-full flex gap-4">
                <div className="w-[70%]">
                    <List categoryCode={categoryCode} />
                    <Pagination />
                </div>
                <div className="w-[30%]  flex flex-col gap-4 justify-start items-center">
                    <ItemSidebar isDouble={true} type="priceCode" content={prices} title={'Xem theo giá'} />
                    <ItemSidebar isDouble={true} type="areaCode" content={areas} title={'Xem diện tích'} />
                    <RelatedPost />
                </div>
            </div>
        </div>
    );
}

export default Rental;
