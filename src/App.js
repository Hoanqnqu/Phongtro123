import { Routes, Route } from 'react-router-dom';
import { path } from '~/ultils/containt';
import { Home, Login } from './contains/Public';
function App() {
    return (
        <div className="h-screen w-creen bg-primary">
            <Routes>
                <Route path={path.HOME} element={<Home />}>
                    <Route path={path.LOGIN} element={<Login />} /> 
                </Route>
            </Routes>
        </div>
    );
}

export default App;
