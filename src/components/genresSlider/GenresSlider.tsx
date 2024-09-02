import Slider from 'react-slick';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectGenres } from '../../store/features/featureGenres/featureGenresSelectors';
import { NextArrow, PrevArrow } from '../arrows/Arrows';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useEffect } from 'react';
import { getGenres } from '../../service/genresService';

import SkeletonGenresSlider from '../../shared/skeleton/SkeletonGenresSlider';

import styles from './genresSlider.module.scss';

const GenresSlider = () => {
    const dispatch = useAppDispatch();
    const { loadingStatus, genres } = useAppSelector(selectGenres);

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenres());
        }
    }, [dispatch, genres.length]);

    const genresList = genres.map((genre) => {
        const name = genre.name;

        const imagePath = require(`../../assets/genres/${name}.png`);

        return (
            <div key={name}>
                <div className={styles.genresSlider__group}>
                    <div className={styles.genresSlider__item}>
                        <img src={imagePath} alt={name} className={styles.genresSlider__item_img} />
                        <div className={styles.genresSlider__item_name}>{`${name
                            .charAt(0)
                            .toUpperCase()}${name.slice(1)}`}</div>
                    </div>
                </div>
            </div>
        );
    });

    if (loadingStatus === 'loading') {
        return <SkeletonGenresSlider />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        touchThreshold: 50,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className={styles.genresSlider}>
            <div className="title">Жанры</div>
            <Slider {...settings}>{genresList}</Slider>
        </div>
    );
};

export default GenresSlider;
