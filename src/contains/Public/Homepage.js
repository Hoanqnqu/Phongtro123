import React, { useEffect } from 'react';
import { List, Province, Pagination, ItemSidebar } from '~/components';
import { text } from '~/ultils/containt';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '~/store/actions';
function Homepage() {
    const [params] = useSearchParams();
    const { categories, prices, areas } = useSelector((state) => state.app);
    const dispath = useDispatch();
    useEffect(() => {
        dispath(actions.getPrices());
        dispath(actions.getAreas());
        console.log(areas);
    }, []);
    return (
        <div className="w-full flex flex-col gap-3">
            <div>
                <h1 className="text-[28px] font-bold"> {text.HOME_TITLE}</h1>
                <p className="text-sm text-gray-700"> {text.HOME_DESCRIPTION}</p>
            </div>
            <Province />
            <div className="w-full flex gap-4">
                <div className="w-[70%]">
                    <List page={params.get('page')} />
                    <Pagination page={params.get('page') || 1} />
                </div>
                <div className="w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center">
                    <ItemSidebar content={categories} title={'Danh sách cho thuê'} />
                    <ItemSidebar isDouble={true} content={prices} title={'Xem theo giá'} />
                    <ItemSidebar isDouble={true} content={areas} title={'Xem diện tích'} />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
