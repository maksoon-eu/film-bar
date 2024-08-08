import { useEffect } from 'react';
import Header from '../components/header/Header';
import MainSlider from '../components/mainSlider/MainSlider';
import { useAppSelector } from '../hooks/selector.hook';
import { selectGenres } from '../store/features/featureGenres/featureGenresSelectors';
import { useAppDispatch } from '../hooks/dispatch.hook';
import { getGenres } from '../service/genresService';

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
            <Header />
            <MainSlider />
        </>
    );
};

export default MainPage;
