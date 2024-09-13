import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import MainPageAsync from "../../pages/mainPage/MainPage.async";
import FilmPageAsync from "../../pages/filmPage/FilmPage.async";
import ErrorPageAsync from "../../pages/errorPage/ErrorPage.async";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function App() {
    return (
        <div className="app">
            <Suspense fallback="">
                <Header />
                <Routes>
                    <Route index element={<MainPageAsync />} />
                    <Route path="/films/:id" element={<FilmPageAsync />} />
                    <Route path="*" element={<ErrorPageAsync />} />
                </Routes>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
