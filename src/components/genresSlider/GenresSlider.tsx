import Slider from 'react-slick';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectGenres } from '../../store/features/featureGenres/featureGenresSelectors';

import styles from './genresSlider.module.scss';
import { NextArrow, PrevArrow } from "../arrows/Arrows";

const GenresSlider = () => {
    const { loadingStatus, genres } = useAppSelector(selectGenres);

    const genresList = genres.map((genre) => {
        const imagePath = require(`../../assets/genres/${genre.name}.png`);

        return (
            <div key={genre.name}>
                <div className={styles.genresSlider__group}>
                    <div className={styles.genresSlider__item}>
                        <img
                            src={imagePath}
                            alt={genre.name}
                            className={styles.genresSlider__item_img}
                        />
                        <div className={styles.genresSlider__item_name}>{genre.name}</div>
                    </div>
                </div>
            </div>
        );
    });

    if (loadingStatus === 'loading') {
        return <div>Loading...</div>;
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
