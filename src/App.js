import { Routes, Route } from 'react-router-dom';
import { path } from '~/ultils/containt';
import {
    DetailPost,
    Home,
    Homepage,
    Login,
    RentalApartment,
    RentalHouse,
    RentalRoom,
    RentalSpace,
} from './contains/Public';
function App() {
    return (
        <div className="w-creen bg-primary">
            <Routes>
                <Route path={path.HOME} element={<Home />}>
                    <Route path="*" element={<Homepage />} />
                    <Route path={path.HOME__PAGE} element={<Homepage />} />
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
                    <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
                    <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
                    <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
                    <Route path={path.DETAIL_POST_TITLE_POSTID} element={<DetailPost />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;