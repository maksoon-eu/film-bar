import { useEffect } from 'react';
import { useAppSelector } from '../hooks/selector.hook';
import { selectGenres } from '../store/features/featureGenres/featureGenresSelectors';
import { useAppDispatch } from '../hooks/dispatch.hook';
import { getGenres } from '../service/genresService';

import Header from '../components/header/Header';
import MainSlider from '../components/mainSlider/MainSlider';
import GenreSlider from '../components/genresSlider/GenresSlider';
import TrailersSlider from "../components/trailersSlider/TrailersSlider";

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { genres } = useAppSelector(selectGenres);

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenres());
        }
    }, []);

    return (
        <>
            <MainSlider />
            <div className="content-page">
                <GenreSlider />
                <TrailersSlider />
            </div>
        </>
    );
};

export default MainPage;
