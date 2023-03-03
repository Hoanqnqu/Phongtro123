import React from 'react';
import { List, Province } from '~/components';
import { text } from '~/ultils/containt';

function Homepage() {
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
                </div>
                <div className="w-[30%] border border-green-500">sidebar</div>
            </div>
        </div>
    );
}

export default Homepage;
