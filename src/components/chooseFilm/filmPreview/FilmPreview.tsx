import { IFilm } from '../../../store/features/film/types/featureFilmType';
import { getFilteredTrailer } from '../../../utils/ui/getFilteredTrailer';
import { LoadingStatusType, Rating } from '../../../types/types';
import { findKey } from '../../../utils/ui/findKey';
import { useMemo } from 'react';

import SkeletonFilmPreview from '../../../shared/skeleton/SkeletonFilmPreview';

import loader from '../../../assets/loader/loader.svg';

import TrailerPlayer from '../../../shared/trailerPlayer/TrailerPlayer';
import styles from './filmPreview.module.scss';

interface IFilmPreview {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}

const FilmPreview = ({ film, loadingStatus }: IFilmPreview) => {
    const ratingStars = (ratingCount: number) => {
        const totalStars = 10;

        return Array.from({ length: totalStars }, (_, i) => (
            <div key={i} className={styles.filmPreview__stars_item}>
                <svg
                    className={styles.filmPreview__stars_star}
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient
                            id={`halfFill${ratingCount + i}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%">
                            <stop
                                offset={`${Math.min(Math.max((ratingCount - i) * 100, 0), 100)}%`}
                                stopColor="#FFC700"
                            />
                            <stop
                                offset={`${Math.min(Math.max((ratingCount - i) * 100, 0), 100)}%`}
                                stopColor="transparent"
                            />
                        </linearGradient>
                    </defs>
                    <path
                        d="M8.90116 1.50097C9.64283 0.0441341 11.7241 0.0441349 12.4658 1.50097L14.1784 4.8649C14.4777 5.45294 15.0479 5.85548 15.7022 5.94076L19.4221 6.42558C21.1104 6.64562 21.7692 8.74008 20.5108 9.88697L17.9378 12.2321C17.4248 12.6997 17.1909 13.3999 17.3199 14.082L17.9693 17.5151C18.2782 19.1475 16.5773 20.4229 15.0967 19.6691L11.591 17.8841C11.0208 17.5938 10.3462 17.5938 9.77601 17.8841L6.27025 19.6691C4.78972 20.4229 3.08882 19.1475 3.39763 17.5151L4.04707 14.082C4.1761 13.3999 3.94221 12.6997 3.42916 12.2321L0.856131 9.88697C-0.402208 8.74008 0.25659 6.64562 1.94489 6.42558L5.66477 5.94076C6.31909 5.85548 6.88924 5.45294 7.18861 4.8649L8.90116 1.50097Z"
                        fill={`url(#halfFill${ratingCount + i})`}
                    />
                    <path
                        d="M10.2026 1.84124C10.6661 0.930713 11.967 0.930713 12.4305 1.84124L14.143 5.20516C14.5547 6.01372 15.3386 6.56721 16.2383 6.68447L19.9582 7.16929C21.0134 7.30682 21.4251 8.61586 20.6387 9.33266L18.0657 11.6778C17.3602 12.3208 17.0386 13.2835 17.216 14.2214L17.8655 17.6545C18.0585 18.6747 16.9954 19.4719 16.0701 19.0007L12.5643 17.2157C11.7804 16.8165 10.8527 16.8165 10.0688 17.2157L6.56301 19.0007C5.63767 19.4719 4.57461 18.6747 4.76762 17.6545L5.41705 14.2214C5.59447 13.2835 5.27288 12.3208 4.56743 11.6778L1.9944 9.33266C1.20794 8.61585 1.61969 7.30682 2.67487 7.16929L6.39475 6.68447C7.29445 6.56721 8.07841 6.01372 8.49004 5.20516L10.2026 1.84124Z"
                        stroke="#FFC700"
                        strokeWidth="1.5"
                    />
                </svg>
                {i + 1}
            </div>
        ));
    };

    const filmPreviewList = useMemo(
        () =>
            film.map((item) => {
                const ratingKey =
                    item.rating && findKey<Rating, 'imdb' | 'kp'>(item.rating, ['imdb', 'kp']);
                const ratingList = ratingKey?.map((rating) => (
                    <div key={rating.value} className={styles.filmPreview__stars}>
                        <div className={styles.filmPreview__stars_name}>
                            Рейтинг:
                            <div className={`${styles[`filmPreview__stars_${rating.name}`]}`}>
                                {rating.name}
                            </div>
                        </div>
                        <div className={styles.filmPreview__stars_value}>
                            {ratingStars(rating.value)}
                        </div>
                    </div>
                ));

                return (
                    <div key={item.id} className={styles.filmPreview__inner}>
                        <div className={styles.filmPreview__trailer}>
                            {item.videos?.trailers?.length ? (
                                <>
                                    <div className={styles.filmPreview__trailer_video}>
                                        <TrailerPlayer
                                            trailerUrl={getFilteredTrailer(item.videos.trailers)}
                                        />
                                    </div>
                                    <div className={styles.filmPreview__trailer_loader}>
                                        <img src={loader} alt="" />
                                    </div>
                                    <div className={styles.filmPreview__trailer_name}>
                                        {item.name || item.enName || item.alternativeName}
                                        <div className={styles.filmPreview__trailer_text}>
                                            Официальный трейлер
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        {ratingList?.length && (
                            <div className={styles.filmPreview__rating}>{ratingList}</div>
                        )}
                    </div>
                );
            }),
        [film]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonFilmPreview />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <div className={styles.filmPreview}>{filmPreviewList}</div>;
};

export default FilmPreview;
