import React from 'react';
import { IFilm } from '../../store/features/featuresMovie/featuresMovieType';
import { Rating } from '../../store/types/types';
import { findKey } from '../../utils/findKey';
import GenresList from '../genresList/GenresList';
import styles from './sliderFilmItem.module.scss';

interface SliderFilmItemProps {
    film: IFilm;
}

const SliderFilmItem: React.FC<SliderFilmItemProps> = React.memo(({ film }) => {
    return (
        <div className={styles.sliderFilm}>
            <div className={styles.sliderFilm__backdrop}>
                <img
                    src={film.backdrop.url}
                    alt={film.name}
                    className={styles.sliderFilm__backdrop_img}
                />
            </div>
            <div className={styles.sliderFilm__left}>
                <div className={styles.sliderFilm__logo}>
                    <img
                        src={film.logo.url}
                        alt={film.name}
                        className={styles.sliderFilm__logo_img}
                    />
                </div>
                <div className={styles.sliderFilm__rating}>{`${findKey<Rating>(
                    film.rating,
                    film.rating.imdb
                )?.toUpperCase()}:${film.rating.imdb}`}</div>
                <div className={styles.sliderFilm__genres}>
                    <GenresList genres={film.genres} />
                </div>
            </div>
        </div>
    );
});

export default SliderFilmItem;
