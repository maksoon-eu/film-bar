import { useMemo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IFilm } from '../../store/features/featureFilm/featureFilmType';
import { LoadingStatusType, Rating } from '../../types/types';
import { findKey } from '../../utils/findKey';

import AssetsList from '../../shared/assetsList/AssetsList';
import PlaceholderImg from '../../shared/placeholderImg/PlaceholderImg';
import RatingItem from '../../shared/ratingItem/RatingItem';
import SkeletonMainSlider from '../../shared/skeleton/SkeletonMainSlider';

import loader from '../../assets/loader/loader.svg';

import styles from './chooseFilm.module.scss';

interface IChooseFilm {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}

const ChooseFilm = ({ loadingStatus, film }: IChooseFilm) => {
    const chooseFilmList = useMemo(
        () =>
            film.map((item) => {
                const ratingKey = findKey<Rating, 'imdb' | 'kp'>(item.rating, ['imdb', 'kp']);
                const ratingList = ratingKey
                    .filter((rating) => rating.value)
                    .map((rating) => <RatingItem key={rating.name} rating={rating} />);

                return (
                    <div key={item.id} className={styles.chooseFilm}>
                        <div className={styles.chooseFilm__backdrop}>
                            <div className={styles.chooseFilm__fade} />
                            {item.backdrop?.url ? (
                                <LazyLoadImage
                                    alt={item.name}
                                    src={item.backdrop.url}
                                    effect="blur"
                                    width={'100%'}
                                    height={'100%'}
                                    threshold={0}
                                    placeholderSrc={loader}
                                    className={styles.chooseFilm__backdrop_img}
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
                                        className={styles.chooseFilm__backdrop_poster}
                                    />
                                )
                            )}
                        </div>
                        <div className={styles.chooseFilm__inner}>
                            <div className={styles.chooseFilm__left}>
                                <div className={styles.chooseFilm__poster}>
                                    {item.poster.url ? (
                                        <LazyLoadImage
                                            alt={item.name}
                                            src={item.poster.url}
                                            effect="blur"
                                            width={'100%'}
                                            height={'100%'}
                                            threshold={0}
                                            placeholderSrc={loader}
                                            className={styles.chooseFilm__poster_img}
                                        />
                                    ) : (
                                        <PlaceholderImg />
                                    )}
                                </div>
                            </div>
                            <div className={styles.chooseFilm__right}>
                                <div className={styles.chooseFilm__content}>
                                    <div className={styles.chooseFilm__logo}>
                                        {item.logo ? (
                                            <img
                                                src={item.logo.url}
                                                alt={item.name}
                                                className={styles.chooseFilm__logo_img}
                                            />
                                        ) : (
                                            <>
                                                <div className={styles.chooseFilm__logo_text}>
                                                    {item.name}
                                                </div>
                                                <div className={styles.chooseFilm__logo_subtext}>
                                                    {item.enName}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className={styles.chooseFilm__rating}>{ratingList}</div>
                                    <div className={styles.chooseFilm__assets}>
                                        <div className={styles.chooseFilm__assets_ageRating}>
                                            <div className={styles.chooseFilm__ageRating}>
                                                {item.ageRating}+
                                            </div>
                                            <AssetsList
                                                list={item.genres.slice(0, 5)}
                                                path="genres"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.chooseFilm__assets} ${styles.chooseFilm__assets_last}`}>
                                        <AssetsList
                                            list={item.countries.slice(0, 5)}
                                            path="countries"
                                        />
                                    </div>
                                    <div className={styles.chooseFilm__description}>
                                        {item.description}
                                    </div>
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

    return <>{chooseFilmList}</>;
};

export default ChooseFilm;
