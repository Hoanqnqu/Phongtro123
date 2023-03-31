import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Contact, Intro } from '~/components';
import { Header, Search } from '~/contains/Public';
import Navigation from './Navigation';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '~/store/actions';
import { apiGetCurrentUser } from '~/services/user';

function Home() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [params] = useSearchParams();
    const dispath = useDispatch();
    useEffect(() => {
        const fetchCurrent = async () => {
            const response = await apiGetCurrentUser();
            console.log(response);
        };
        isLoggedIn && fetchCurrent();
    }, [isLoggedIn]);
    useEffect(() => {
        dispath(actions.getPrices());
        dispath(actions.getAreas());
        dispath(actions.getProvince());
    }, [params]);
    return (
        <div className="w-full flex gap-2 flex-col items-center h-full">
            <Header />
            <Navigation />
            {isLoggedIn && <Search />}
            <div className="w-4/5 lg:w-3/5  flex flex-col items-start justify-start mt-3">
                <Outlet />
            </div>
            <div className="w-4/5 lg:w-3/5  flex flex-col items-start justify-start mt-3 gap-6">
                <Intro />
                <Contact />
            </div>
        </div>
    );
}

export default Home;
