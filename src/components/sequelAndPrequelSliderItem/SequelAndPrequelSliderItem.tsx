import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getRatingBg } from '../../utils/ratingBg';
import { IFilm } from '../../store/features/featureFilm/featureFilmType';

import loader from '../../assets/loader/loader.svg';

import styles from './sequelAndPrequelSliderItem.module.scss';

interface ISequelAndPrequelSliderItem {
    film: IFilm['sequelsAndPrequels'][0];
}

const SequelAndPrequelSliderItem = ({ film }: ISequelAndPrequelSliderItem) => {
    return (
        <Link to={`/films/${film.id}`} key={film.id} className={styles.sequelAndPrequelSliderItem__slide}>
            <div className={styles.sequelAndPrequelSliderItem__item}>
                <div className={styles.sequelAndPrequelSliderItem__item_poster}>
                    <LazyLoadImage
                        alt={film.name}
                        effect="blur"
                        src={film.poster.previewUrl || film.poster.url || loader}
                        placeholderSrc={loader}
                    />
                    <div className={styles.sequelAndPrequelSliderItem__item_fade}>
                        <div className={styles.sequelAndPrequelSliderItem__item_group}>
                            <div className={styles.sequelAndPrequelSliderItem__item_year}>
                                <div className={styles.sequelAndPrequelSliderItem__item_title}>Год</div>
                                {film.year}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sequelAndPrequelSliderItem__item_name}>{film.name}</div>
                <div
                    className={`${styles.sequelAndPrequelSliderItem__item_rating} ${getRatingBg(
                        film.rating.kp || film.rating.imdb,
                        styles
                    )}`}>
                    {film.rating.kp ? film.rating.kp.toFixed(1) : film.rating.imdb.toFixed(1)}
                </div>
            </div>
        </Link>
    );
};

export default SequelAndPrequelSliderItem;