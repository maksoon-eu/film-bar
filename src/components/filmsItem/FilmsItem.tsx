import { IFilmSlider } from '../../store/features/filmsSliderNew/types/featureFilmsSliderNewTypes';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { lengthOfWatch } from '../../utils/ui/lengthOfWatch';
import { getRatingBg } from '../../utils/ui/ratingBg';
import { Link } from 'react-router-dom';

import loader from '../../assets/loader/loader.svg';

import styles from './filmsItem.module.scss';

interface FilmsItemProps {
    film: IFilmSlider;
}

const FilmsItem = ({ film }: FilmsItemProps) => {
    return (
        <Link to={`/films/${film.id}`} className={styles.filmsItem__slide}>
            <div className={styles.filmsItem__item}>
                <div className={styles.filmsItem__item_poster}>
                    <LazyLoadImage
                        alt={film.name}
                        effect="blur"
                        src={film.poster.previewUrl || film.poster.url}
                        placeholderSrc={loader}
                    />
                    <div className={styles.filmsItem__item_fade}>
                        <div className={styles.filmsItem__item_group}>
                            <div className={styles.filmsItem__item_year}>
                                <div className={styles.filmsItem__item_title}>Год</div>
                                {film.year}
                            </div>
                            <div className={styles.filmsItem__item_country}>
                                <div className={styles.filmsItem__item_title}>
                                    {film.countries.length === 1 ? 'Страна' : 'Страны'}
                                </div>
                                {film.countries
                                    .map((country) => country.name)
                                    .slice(0, 3)
                                    .join(', ')}
                            </div>
                            <div className={styles.filmsItem__item_genres}>
                                <div className={styles.filmsItem__item_title}>
                                    {film.genres.length === 1 ? 'Жанр' : 'Жанры'}
                                </div>
                                {film.genres
                                    .map((genre) => genre.name)
                                    .slice(0, 3)
                                    .join(', ')}
                            </div>
                            <div className={styles.filmsItem__item_length}>
                                <div className={styles.filmsItem__item_title}>Длительность</div>
                                {lengthOfWatch(film)}
                            </div>
                        </div>
                        <div className={styles.filmsItem__item_ageRating}>{film.ageRating}+</div>
                    </div>
                </div>
                <div className={styles.filmsItem__item_name}>{film.name}</div>
                {film.rating.kp || film.rating.imdb ? (
                    <div
                        className={`${styles.filmsItem__item_rating} ${getRatingBg(
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

export default FilmsItem;
