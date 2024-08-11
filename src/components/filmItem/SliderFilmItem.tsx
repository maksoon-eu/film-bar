import React, { useMemo } from 'react';
import { IFilm } from "../../store/features/featureFilms/featureFilmsTypes";
import { Rating } from '../../store/types/types';
import { findKey } from '../../utils/findKey';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import AssetsList from '../../shared/assetsList/AssetsList';
import Button from '../../shared/button/Button';

import styles from './sliderFilmItem.module.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';

interface SliderFilmItemProps {
    film: IFilm;
}

const SliderFilmItem: React.FC<SliderFilmItemProps> = React.memo(({ film }) => {
    const ratingList = useMemo(() => {
        return findKey<Rating, 'imdb' | 'kp'>(film.rating, ['imdb', 'kp']).map((rating) => {
            return (
                <div
                    key={rating.name}
                    className={`${styles.sliderFilm__rating_item} ${
                        styles[`sliderFilm__rating_${rating.name}`]
                    }`}>
                    <span className={styles.sliderFilm__rating_name}>
                        {rating.name.toUpperCase()}:
                    </span>{' '}
                    {rating.value.toFixed(1)}
                </div>
            );
        });
    }, [film.rating]);

    return (
        <div className={styles.sliderFilm}>
            <div className={styles.sliderFilm__backdrop}>
                <LazyLoadImage
                    alt={film.name}
                    src={film.backdrop.url}
                    effect="opacity"
                    width={'100%'}
                    height={'100%'}
                    threshold={0}
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
                <div className={styles.sliderFilm__info}>
                    <div className={styles.sliderFilm__rating}>{ratingList}</div>
                    <div className={styles.sliderFilm__ageRating}>{film.ageRating}+</div>
                </div>
                <div className={styles.sliderFilm__assets}>
                    <AssetsList list={film.genres} path="genres" />
                </div>
                <div className={`${styles.sliderFilm__assets} ${styles.sliderFilm__assets_last}`}>
                    <AssetsList list={film.countries} path="countries" />
                </div>
                <div className={styles.sliderFilm__description}>{film.description}</div>
                <div className={styles.sliderFilm__btn}>
                    <Button>Страница фильма</Button>
                </div>
            </div>
        </div>
    );
});

export default SliderFilmItem;
