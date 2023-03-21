import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { formatVietnameseToString } from '~/ultils/common';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '~/store/actions';

const notActive = 'hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1';
const active = 'hover;bg-secondary2 px-4 h-full flex items-center bg-secondary2';

function Navigation() {
    // const [categories, setCategories] = useState([]);
    const usedispath = useDispatch();
    const { categories } = useSelector((state) => state.app);
    useEffect(() => {
        // const fetchCategories = async () => {
        //     const response = await apiGetCategories();
        //     if (response?.data.err === 0) {
        //         setCategories(response.data.response);
        //     }
        // };
        // fetchCategories();
        usedispath(actions.getCategories());
    }, []);
    
    return (
        <div className="w-full flex justify-center items-center h-[40px] bg-secondary1 text-white">
            <div className="w-3/5 flex h-full items-center text-sm font-medium">
                <NavLink to={'/'} className={({ isActive }) => (isActive ? active : notActive)}>
                    Trang chủ
                </NavLink>
                {categories?.length > 0 &&
                    categories.map((item) => {
                        return (
                            <div key={item.code} className="h-full flex justify-center items-center">
                                <NavLink
                                    to={formatVietnameseToString(item.value)}
                                    className={({ isActive }) => (isActive ? active : notActive)}
                                >
                                    {item.value}
                                </NavLink>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Navigation;
