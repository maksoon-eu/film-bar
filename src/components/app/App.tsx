import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../header/Header';
import MainPage from '../../pages/MainPage';
import ErrorPage from '../../pages/ErrorPage';

function App() {
    return (
        <div className="app">
            <Suspense fallback="">
                <Header />
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
