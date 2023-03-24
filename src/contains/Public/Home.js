import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Contact, Intro } from '~/components';
import { Header, Search } from '~/contains/Public';
import Navigation from './Navigation';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '~/store/actions';
function Home() {
    const [params] = useSearchParams();
    const dispath = useDispatch();
    useEffect(() => {
        dispath(actions.getPrices());
        dispath(actions.getAreas());
    }, [params]);
    return (
        <div className="w-full flex gap-2 flex-col items-center h-full">
            <Header />
            <Navigation />
            <Search />
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
