import { Routes, Route } from 'react-router-dom';
import { path } from '~/ultils/containt';
import { DetailPost, Home, Homepage, Login, Rental, SearchDetail } from './contains/Public';
import { CreatePost, System } from './contains/System';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as actions from '~/store/actions';


function App() {
    const dispath = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
   

    useEffect(() => {
        setTimeout(() => {
            isLoggedIn && dispath(actions.getCurrent());
        }, 100);
    }, [isLoggedIn]);
    useEffect(() => {
        dispath(actions.getPrices());
        dispath(actions.getAreas());
        dispath(actions.getProvince());
    }, []);

    return (
        <div className="w-creen bg-primary overflow-hidden">
            <Routes>
                <Route path={path.HOME} element={<Home />}>
                    <Route path="*" element={<Homepage />} />
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.CHO_THUE_CAN_HO} element={<Rental categoryCode={'CTCH'} />} />
                    <Route path={path.CHO_THUE_MAT_BANG} element={<Rental categoryCode={'CTMB'} />} />
                    <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental categoryCode={'CTPT'} />} />
                    <Route path={path.NHA_CHO_THUE} element={<Rental categoryCode={'NCT'} />} />
                    <Route path={path.SEARCH} element={<SearchDetail />} />

                    <Route path={path.DETAIL_POST_TITLE_POSTID} element={<DetailPost />} />
                </Route>
                <Route path={path.SYSTEM} element={<System />}>
                    <Route path={path.CREATE_POST} element={<CreatePost />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
