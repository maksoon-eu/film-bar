import { useMemo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IFilm } from "../../../store/features/film/types/featureFilmType";
import { LoadingStatusType, Rating } from '../../../types/types';
import { findKey } from '../../../utils/findKey';

import AssetsList from '../../../shared/assetsList/AssetsList';
import PlaceholderImg from '../../../shared/placeholderImg/PlaceholderImg';
import RatingItem from '../../../shared/ratingItem/RatingItem';
import SkeletonMainSlider from '../../../shared/skeleton/SkeletonMainSlider';

import loader from '../../../assets/loader/loader.svg';

import styles from './mainPoster.module.scss';

interface IMainPoster {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}

const MainPoster = ({ loadingStatus, film }: IMainPoster) => {
    const mainPosterList = useMemo(
        () =>
            film.map((item) => {
                const ratingKey =
                    item.rating && findKey<Rating, 'imdb' | 'kp'>(item.rating, ['imdb', 'kp']);
                const ratingList = ratingKey
                    ?.filter((rating) => rating.value)
                    .map((rating) => <RatingItem key={rating.name} rating={rating} />);

                return (
                    <div key={item.id} className={styles.mainPoster}>
                        <div className={styles.mainPoster__backdrop}>
                            <div className={styles.mainPoster__fade} />
                            {item.backdrop?.url ? (
                                <LazyLoadImage
                                    alt={item.name}
                                    src={item.backdrop.url}
                                    effect="blur"
                                    width={'100%'}
                                    height={'100%'}
                                    threshold={0}
                                    placeholderSrc={loader}
                                    className={styles.mainPoster__backdrop_img}
                                />
                            ) : (
                                item.poster?.url && (
                                    <LazyLoadImage
                                        alt={item.name}
                                        src={item.poster.url}
                                        effect="blur"
                                        width={'100%'}
                                        height={'100%'}
                                        threshold={0}
                                        placeholderSrc={loader}
                                        className={styles.mainPoster__backdrop_poster}
                                    />
                                )
                            )}
                        </div>
                        <div className={styles.mainPoster__inner}>
                            <div className={styles.mainPoster__left}>
                                <div className={styles.mainPoster__poster}>
                                    {item.poster?.url ? (
                                        <LazyLoadImage
                                            alt={item.name}
                                            src={item.poster.url}
                                            effect="blur"
                                            width={'100%'}
                                            height={'100%'}
                                            threshold={0}
                                            placeholderSrc={loader}
                                            className={styles.mainPoster__poster_img}
                                        />
                                    ) : (
                                        <PlaceholderImg />
                                    )}
                                </div>
                            </div>
                            <div className={styles.mainPoster__right}>
                                <div className={styles.mainPoster__content}>
                                    <div className={styles.mainPoster__logo}>
                                        {item.logo?.url ? (
                                            <img
                                                src={item.logo.url}
                                                alt={item.name}
                                                className={styles.mainPoster__logo_img}
                                            />
                                        ) : (
                                            <>
                                                <div className={styles.mainPoster__logo_text}>
                                                    {item.name}
                                                </div>
                                            </>
                                        )}
                                        <div className={styles.mainPoster__logo_subtext}>
                                            {item.enName || item.alternativeName}
                                        </div>
                                    </div>
                                    <div className={styles.mainPoster__rating}>{ratingList}</div>

                                    <div className={styles.mainPoster__assets}>
                                        <div className={styles.mainPoster__assets_ageRating}>
                                            {item.ageRating && (
                                                <div className={styles.mainPoster__ageRating}>
                                                    {item.ageRating}+
                                                </div>
                                            )}
                                            {item.genres?.length && (
                                                <AssetsList
                                                    list={item.genres.slice(0, 5)}
                                                    path="genres"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {item.countries?.length && (
                                        <div
                                            className={`${styles.mainPoster__assets} ${styles.mainPoster__assets_last}`}>
                                            <AssetsList
                                                list={item.countries.slice(0, 5)}
                                                path="countries"
                                            />
                                        </div>
                                    )}

                                    {item.description && (
                                        <div className={styles.mainPoster__description}>
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }),
        [film]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonMainSlider />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <>{mainPosterList}</>;
};

export default MainPoster;
