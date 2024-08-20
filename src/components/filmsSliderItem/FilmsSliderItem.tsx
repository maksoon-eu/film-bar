import { LazyLoadImage } from 'react-lazy-load-image-component';

import loader from '../../assets/loader/loader.svg';

import styles from './filmsSliderItem.module.scss';
import { IFilmSlider } from '../../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes';

interface FilmsSliderItemProps {
    film: IFilmSlider;
}

const FilmsSliderItem = ({ film }: FilmsSliderItemProps) => {
    const getRatingBg = (rating: number) => {
        if (rating > 7) return styles.green;
        if (rating > 5) return styles.yellow;
        return styles.red;
    };

    const lengthOfWatch = (item: IFilmSlider) => {
        if ('movieLength' in item) {
            return item.movieLength;
        } else if ('seriesLength' in item) {
            return item.seriesLength;
        }
        return null;
    };
    return (
        <div className={styles.filmsSliderItem__slide}>
            <div className={styles.filmsSliderItem__item}>
                <div className={styles.filmsSliderItem__item_poster}>
                    <LazyLoadImage
                        alt={film.name}
                        effect="blur"
                        src={film.poster.previewUrl || film.poster.url}
                        placeholderSrc={loader}
                    />
                    <div className={styles.filmsSliderItem__item_fade}>
                        <div className={styles.filmsSliderItem__item_group}>
                            <div className={styles.filmsSliderItem__item_year}>
                                <div className={styles.filmsSliderItem__item_title}>Год</div>
                                {film.year}
                            </div>
                            <div className={styles.filmsSliderItem__item_country}>
                                <div className={styles.filmsSliderItem__item_title}>
                                    {film.countries.length === 1 ? 'Страна' : 'Страны'}
                                </div>
                                {film.countries
                                    .map((country) => country.name)
                                    .slice(0, 3)
                                    .join(', ')}
                            </div>
                            <div className={styles.filmsSliderItem__item_genres}>
                                <div className={styles.filmsSliderItem__item_title}>
                                    {film.genres.length === 1 ? 'Жанр' : 'Жанры'}
                                </div>
                                {film.genres
                                    .map((genre) => genre.name)
                                    .slice(0, 3)
                                    .join(', ')}
                            </div>
                            <div className={styles.filmsSliderItem__item_length}>
                                <div className={styles.filmsSliderItem__item_title}>
                                    Длительность
                                </div>
                                {lengthOfWatch(film)} мин
                            </div>
                        </div>
                        <div className={styles.filmsSliderItem__item_ageRating}>
                            {film.ageRating}+
                        </div>
                    </div>
                </div>
                <div className={styles.filmsSliderItem__item_name}>{film.name}</div>
                <div
                    className={`${styles.filmsSliderItem__item_rating} ${getRatingBg(
                        film.rating.kp
                    )}`}>
                    {film.rating.kp.toFixed(1)}
                </div>
            </div>
        </div>
    );
};

export default FilmsSliderItem;
