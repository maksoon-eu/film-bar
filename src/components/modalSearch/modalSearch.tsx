import { RefObject, useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectFilmsSearch } from '../../store/features/featureFilmsSearch/featureFilmsSearchSelector';
import { getFilmsSearch } from '../../service/filmsSearchService';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { findKey } from '../../utils/findKey';
import { Rating } from '../../types/types';
import { useModal } from '../../hooks/modal.hook';
import { Link } from 'react-router-dom';

import RatingItem from '../../shared/ratingItem/RatingItem';
import AssetsList from '../../shared/assetsList/AssetsList';
import Loader from '../../shared/loader/Loader';

import loader from '../../assets/loader/loader.svg';

import styles from './modalSearch.module.scss';

interface ModalSearchProps {
    inputSearch: string;
    isOpenModal: boolean;
    closeHandler: () => void;
    clearHandler: () => void;
    refModal: RefObject<HTMLDivElement>;
}

const ModalSearch = ({
    inputSearch,
    isOpenModal,
    closeHandler,
    clearHandler,
    refModal,
}: ModalSearchProps) => {
    const dispatch = useAppDispatch();
    const { filmsSearch, loadingStatus } = useAppSelector(selectFilmsSearch);

    useModal({ isOpenModal, closeHandler, refModal });

    useEffect(() => {
        dispatch(getFilmsSearch(inputSearch));
    }, [dispatch, inputSearch]);

    const filmsSearchList = useMemo(
        () =>
            filmsSearch.map((film) => {
                const ratingKey = findKey<Rating, 'imdb' | 'kp'>(film.rating, ['imdb', 'kp']);
                const ratingList = ratingKey
                    .filter((rating) => rating.value)
                    .map((rating) => {
                        return <RatingItem key={rating.name} rating={rating} />;
                    });

                return (
                    <Link
                        to={`/films/${film.id}`}
                        key={film.id}
                        className={styles.modalSearch__list_item}
                        onClick={() => {
                            closeHandler();
                            clearHandler();
                        }}>
                        <div className={styles.modalSearch__list_left}>
                            <LazyLoadImage
                                alt={film.name || film.enName}
                                effect="blur"
                                src={film.poster.previewUrl || film.poster.url || loader}
                                placeholderSrc={loader}
                            />
                        </div>
                        <div className={styles.modalSearch__list_right}>
                            <div className={styles.modalSearch__list_name}>
                                {film.name || film.enName}
                            </div>
                            <div className={styles.modalSearch__list_rating}>{ratingList}</div>
                            <div className={styles.modalSearch__list_assets}>
                                <AssetsList
                                    list={film.genres.slice(0, 2)}
                                    styleAsset={'search'}
                                    path={'genres'}
                                />
                            </div>
                            <div
                                className={`${styles.modalSearch__list_assets} ${styles.modalSearch__list_assets_last}`}>
                                <AssetsList
                                    list={film.countries.slice(0, 2)}
                                    styleAsset={'search'}
                                    path={'countries'}
                                />
                            </div>
                            <div className={styles.modalSearch__list_year}>{film.year}</div>
                        </div>
                    </Link>
                );
            }),
        [filmsSearch]
    );

    return (
        <div className={styles.modalSearch}>
            {isOpenModal && (
                <div className={styles.modalSearch__list}>
                    {loadingStatus === 'loading' ? <Loader /> : filmsSearchList}
                </div>
            )}
        </div>
    );
};

export default ModalSearch;
