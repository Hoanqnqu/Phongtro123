import React from 'react';
import { Outlet } from 'react-router-dom';
import { Contact, Intro } from '~/components';
import { Header, Search } from '~/contains/Public';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { path } from '~/ultils/containt';
function Home() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const location = useLocation();

    return (
        <div className="w-full flex gap-2 flex-col items-center h-full">
            <Header />
            <Navigation />
            {isLoggedIn && location.pathname !== `/${path.CONTACT}` && <Search />}
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
