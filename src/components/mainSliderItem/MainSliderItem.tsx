import React from 'react';
import { IFilms } from '../../store/features/featureFilms/featureFilmsTypes';
import { findKey } from '../../utils/findKey';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import AssetsList from '../../shared/assetsList/AssetsList';
import Button from '../../shared/button/Button';
import RatingItem from '../../shared/ratingItem/RatingItem';

import loader from '../../assets/loader/loader.svg';

import styles from './mainSliderItem.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

interface SliderFilmItemProps {
    film: IFilms;
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
                <div className={styles.sliderFilm__rating}>{ratingList}</div>
                <div className={styles.sliderFilm__assets}>
                    <div className={styles.sliderFilm__assets_ageRating}>
                        <div className={styles.sliderFilm__ageRating}>{film.ageRating}+</div>
                        <AssetsList list={film.genres.slice(0, 5)} path="genres" />
                    </div>
                </div>
                <div className={`${styles.sliderFilm__assets} ${styles.sliderFilm__assets_last}`}>
                    <AssetsList list={film.countries.slice(0, 5)} path="countries" />
                </div>
                <div className={styles.sliderFilm__description}>{film.description}</div>
                <Link to={`/films/${film.id}`} className={styles.sliderFilm__btn}>
                    <Button>Страница фильма</Button>
                </Link>
            </div>
        </div>
    );
});

export default MainSliderItem;
