import React  from 'react';
import { List, Province, Pagination, ItemSidebar, RelatedPost } from '~/components';
import { text } from '~/ultils/containt';
import {  useSelector } from 'react-redux';

function Homepage() {
    const { categories, prices, areas } = useSelector((state) => state.app);
   
    return (
        <div className="w-full flex flex-col gap-3">
            <div>
                <h1 className="text-[28px] font-bold"> {text.HOME_TITLE}</h1>
                <p className="text-sm text-gray-700"> {text.HOME_DESCRIPTION}</p>
            </div>
            <Province />
            <div className="w-full flex gap-4">
                <div className="w-[70%]">
                    <List />
                    <Pagination  />
                </div>
                <div className="w-[30%]  flex flex-col gap-4 justify-start items-center">
                    <ItemSidebar content={categories} title={'Danh sách cho thuê'} />
                    <ItemSidebar isDouble={true} type="priceCode" content={prices} title={'Xem theo giá'} />
                    <ItemSidebar isDouble={true} type="areaCode" content={areas} title={'Xem diện tích'} />
                    <RelatedPost />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
