import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './mainSlider.module.scss';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectMovies } from '../../store/features/featureMovies/featureMoviesSelectors';
import { getFilms } from '../../service/filmsService';
import { useEffect, useMemo } from 'react';
import SliderFilmItem from '../filmItem/SliderFilmItem';

const MainSlider: React.FC = () => {
    const dispatch = useAppDispatch();
    const { loadingStatus, films } = useAppSelector(selectMovies);

    useEffect(() => {
        if (!films.length) {
            dispatch(getFilms());
        }
    }, [dispatch, films.length]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const filmList = useMemo(() => {
        return films.map((film) => {
            return <SliderFilmItem key={film.id} film={film} />
        })
    }, [films]);

    if (loadingStatus === 'loading') {
        return <div style={{color: '#000'}}>Loading...</div>;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return (
        <div className={styles.slider}>
            <Slider {...settings}>{filmList}</Slider>
        </div>
    );
};

export default MainSlider;
