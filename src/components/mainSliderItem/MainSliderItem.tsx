import React, { useMemo } from 'react';
import { IFilm } from '../../store/features/featureFilms/featureFilmsTypes';
import { findKey } from '../../utils/findKey';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import AssetsList from '../../shared/assetsList/AssetsList';
import Button from '../../shared/button/Button';
import RatingItem from '../../shared/ratingList/RatingItem';

import loader from '../../assets/loader/loader.svg';

import styles from './mainSliderItem.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface SliderFilmItemProps {
    film: IFilm;
}

const MainSliderItem = React.memo(({ film }: SliderFilmItemProps) => {
    const ratingList = findKey(film.rating, ['imdb', 'kp']).map((rating) => {
        return <RatingItem key={rating.name} rating={rating} />;
    });

    return (
        <div className={styles.sliderFilm}>
            <div className={styles.sliderFilm__fade}></div>
            <div className={styles.sliderFilm__backdrop}>
                <LazyLoadImage
                    alt={film.name}
                    src={film.backdrop.url}
                    effect="blur"
                    width={'100%'}
                    height={'100%'}
                    threshold={0}
                    placeholderSrc={loader}
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

export default MainSliderItem;
