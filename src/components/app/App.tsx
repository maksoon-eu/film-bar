import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../header/Header';
import ErrorPage from '../../pages/ErrorPage';
import Footer from '../footer/Footer';
import MainPageAsync from "../../pages/mainPage/MainPage.async";
import FilmPageAsync from "../../pages/filmPage/FilmPage.async";

function App() {
    return (
        <div className="app">
            <Suspense fallback="">
                <Header />
                <Routes>
                    <Route index element={<MainPageAsync />} />
                    <Route path="/films/:id" element={<FilmPageAsync />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
