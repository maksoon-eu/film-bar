import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectFilmsSearch } from '../../store/features/featureFilmsSearch/featureFilmsSearchSelector';
import { getFilmsSearch } from '../../service/filmsSearchService';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { findKey } from '../../utils/findKey';
import { Rating } from '../../store/types/types';

import RatingItem from '../../shared/ratingItem/RatingItem';
import AssetsList from '../../shared/assetsList/AssetsList';

import loader from '../../assets/loader/loader.svg';

import styles from './searchModal.module.scss';

interface SearchModalProps {
    inputSearch: string;
    open: boolean;
    closeHandler: () => void;
}

const SearchModal = ({ inputSearch, open, closeHandler }: SearchModalProps) => {
    const refModal = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();
    const { filmsSearch, loadingStatus } = useAppSelector(selectFilmsSearch);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    const clickOutModal = useCallback(
        (e: MouseEvent) => {
            if (refModal.current && !refModal.current.contains(e.target as Node)) {
                closeHandler();
            }
        },
        [closeHandler, refModal]
    );

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', onKeyDown);
            window.addEventListener('click', clickOutModal);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.addEventListener('click', clickOutModal);
        };
    }, [open, onKeyDown, clickOutModal]);

    useEffect(() => {
        dispatch(getFilmsSearch());
    }, [inputSearch]);

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
                    <div key={film.id} className={styles.searchModal__list_item}>
                        <div className={styles.searchModal__list_left}>
                            <LazyLoadImage
                                alt={film.name}
                                effect="blur"
                                src={film.poster.previewUrl || film.poster.url}
                                placeholderSrc={loader}
                            />
                        </div>
                        <div className={styles.searchModal__list_right}>
                            <div className={styles.searchModal__list_name}>{film.name}</div>
                            <div className={styles.searchModal__list_rating}>{ratingList}</div>
                            <div className={styles.searchModal__list_assets}>
                                <AssetsList
                                    list={film.genres.slice(0, 2)}
                                    style={'search'}
                                    path="genres"
                                />
                            </div>
                            <div
                                className={`${styles.searchModal__list_assets} ${styles.searchModal__list_assets_last}`}>
                                <AssetsList
                                    list={film.countries.slice(0, 2)}
                                    style={'search'}
                                    path="countries"
                                />
                            </div>
                            <div className={styles.searchModal__list_year}>{film.year}</div>
                        </div>
                    </div>
                );
            }),
        [filmsSearch]
    );

    return (
        <div className={`${styles.searchModal} ${styles[open ? 'open' : 'close']}`} ref={refModal}>
            <div className={styles.searchModal__list}>
                {loadingStatus === 'loading' ? <img src={loader} alt="loader" /> : filmsSearchList}
            </div>
        </div>
    );
};

export default SearchModal;
