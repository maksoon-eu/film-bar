import Slider from 'react-slick';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectFilms } from '../../store/features/featureFilms/featureFilmsSelectors';
import { getFilms } from '../../service/filmsService';
import { useEffect, useMemo } from 'react';

import MainSliderItem from "../mainSliderItem/MainSliderItem";
import SkeletonMainSlider from "../../shared/skeleton/SkeletonMainSlider";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './mainSlider.module.scss';

const MainSlider = () => {
    const dispatch = useAppDispatch();
    const { loadingStatus, films } = useAppSelector(selectFilms);

    useEffect(() => {
        if (!films.length) {
            dispatch(getFilms());
        }
    }, [dispatch, films.length]);

    const filmList = useMemo(() => {
        return films.map((film) => {
            return (
                <div key={film.id}>
                    <MainSliderItem film={film} />
                </div>
            );
        });
    }, [films]);

    if (loadingStatus === 'loading') {
        return <SkeletonMainSlider />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        swipe: true,
        pauseOnHover: false,
    };

    return (
        <div className={styles.mainSlider}>
            <Slider {...settings}>{filmList}</Slider>
        </div>
    );
};

export default MainSlider;
