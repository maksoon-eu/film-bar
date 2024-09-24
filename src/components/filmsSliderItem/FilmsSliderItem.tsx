import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IFilmSlider } from '../../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes';
import { Link } from 'react-router-dom';
import { getRatingBg } from '../../utils/ratingBg';
import { lengthOfWatch } from '../../utils/lengthOfWatch';

import loader from '../../assets/loader/loader.svg';

import styles from './filmsSliderItem.module.scss';

interface FilmsSliderItemProps {
    film: IFilmSlider;
}

const FilmsSliderItem = ({ film }: FilmsSliderItemProps) => {
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
                {film.rating.kp || film.rating.imdb ? (
                    <div
                        className={`${styles.filmsSliderItem__item_rating} ${getRatingBg(
                            film.rating.kp || film.rating.imdb,
                            styles
                        )}`}>
                        {(film.rating.kp || film.rating.imdb).toFixed(1)}
                    </div>
                ) : null}
            </div>
        </Link>
    );
};

export default FilmsSliderItem;
