import { Routes, Route } from 'react-router-dom';
import { path } from '~/ultils/containt';
import { DetailPost, Home, Homepage, Login, Rental } from './contains/Public';
function App() {
    return (
        <div className="w-creen bg-primary">
            <Routes>
                <Route path={path.HOME} element={<Home />}>
                    <Route path="*" element={<Homepage />} />
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.CHO_THUE_CAN_HO} element={<Rental categoryCode={'CTCH'} />} />
                    <Route path={path.CHO_THUE_MAT_BANG} element={<Rental categoryCode={'CTMB'} />} />
                    <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental categoryCode={'CTPT'} />} />
                    <Route path={path.NHA_CHO_THUE} element={<Rental categoryCode={'NCT'} />} />
                    <Route path={path.DETAIL_POST_TITLE_POSTID} element={<DetailPost />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
