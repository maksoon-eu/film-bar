import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IFilmSlider } from '../../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes';
import { Link } from 'react-router-dom';
import { getRatingBg } from '../../utils/ratingBg';

import loader from '../../assets/loader/loader.svg';

import styles from './filmsSliderItem.module.scss';

interface FilmsSliderItemProps {
    film: IFilmSlider;
}

const FilmsSliderItem = ({ film }: FilmsSliderItemProps) => {
    const getSeasonLabel = (count: number) => {
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return 'сезонов';
        }

        if (lastDigit === 1) {
            return 'сезон';
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'сезона';
        }

        return 'сезонов';
    };

    const lengthOfWatch = (item: IFilmSlider) => {
        let lengthResult;

        if ('movieLength' in item) {
            lengthResult = `${item.movieLength} мин`;
        } else if ('seasonsInfo' in item) {
            const seasonCount = item.seasonsInfo?.length;
            lengthResult = seasonCount
                ? `${seasonCount} ${getSeasonLabel(seasonCount)}`
                : undefined;
        }
        return lengthResult || '...';
    };

    return (
        <Link to={`/films/${film.id}`} className={styles.filmsSliderItem__slide}>
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
                                {lengthOfWatch(film)}
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
                        film.rating.kp,
                        styles
                    )}`}>
                    {film.rating.kp.toFixed(1)}
                </div>
            </div>
        </Link>
    );
};

export default FilmsSliderItem;
