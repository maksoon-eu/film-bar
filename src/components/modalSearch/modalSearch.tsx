import { RefObject, useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectFilmsSearchFilms } from '../../store/features/filmsSearch/selectors/selectFilmsSearchFilms';
import DynamicModuleLoader, {
    ReducerList,
} from '../../shared/dynamicModuleLoader/DynamicModuleLoader';
import { filmsSearchReducer } from '../../store/features/filmsSearch/slice/featureFilmsSearchSlice';
import { selectFilmsSearchLoading } from '../../store/features/filmsSearch/selectors/selectFilmsSearchLoading';
import { getFilmsSearch } from '../../store/features/filmsSearch/service/filmsSearchService';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { findKey } from '../../utils/ui/findKey';
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
    closeHandler: () => void;
    clearHandler: () => void;
    refModal: RefObject<HTMLDivElement>;
}

const initialReducers: ReducerList = {
    filmsSearch: filmsSearchReducer,
};

const ModalSearch = ({ inputSearch, closeHandler, clearHandler, refModal }: ModalSearchProps) => {
    const dispatch = useAppDispatch();
    const filmsSearch = useAppSelector(selectFilmsSearchFilms);
    const loadingStatus = useAppSelector(selectFilmsSearchLoading);

    useModal({ isOpenModal: true, closeHandler, refModal });

    useEffect(() => {
        if (inputSearch.trim() || inputSearch.length === 0) {
            dispatch(getFilmsSearch(inputSearch));
        }
    }, [dispatch, inputSearch]);

    const filmsSearchList = useMemo(() => {
        return filmsSearch.map((film) => {
            const ratingKey =
                film.rating && findKey<Rating, 'imdb' | 'kp'>(film.rating, ['imdb', 'kp']);
            const ratingList = ratingKey
                ?.filter((rating) => rating.value)
                .map((rating) => <RatingItem key={rating.name} rating={rating} />);

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
                            src={film.poster?.previewUrl || film.poster?.url || loader}
                            placeholderSrc={loader}
                        />
                    </div>
                    <div className={styles.modalSearch__list_right}>
                        <div className={styles.modalSearch__list_name}>
                            {film.name || film.enName || film.alternativeName}
                        </div>
                        {ratingList && (
                            <div className={styles.modalSearch__list_rating}>{ratingList}</div>
                        )}
                        {film.genres?.length && (
                            <div className={styles.modalSearch__list_assets}>
                                <AssetsList
                                    list={film.genres.slice(0, 2)}
                                    styleAsset={'search'}
                                    path={'genres'}
                                />
                            </div>
                        )}
                        {film.countries?.length && (
                            <div
                                className={`${styles.modalSearch__list_assets} ${styles.modalSearch__list_assets_last}`}>
                                <AssetsList
                                    list={film.countries.slice(0, 2)}
                                    styleAsset={'search'}
                                    path={'countries'}
                                />
                            </div>
                        )}
                        {film.year && (
                            <div className={styles.modalSearch__list_year}>{film.year}</div>
                        )}
                    </div>
                </Link>
            );
        });
    }, [filmsSearch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={styles.modalSearch}>
                <div className={styles.modalSearch__list}>
                    {loadingStatus === 'loading' ? (
                        <Loader />
                    ) : loadingStatus === 'error' ? (
                        <div className={styles.modalSearch__info}>Ошибка сервера</div>
                    ) : !filmsSearchList.length ? (
                        <div className={styles.modalSearch__info}>Ничего не найдено</div>
                    ) : (
                        filmsSearchList
                    )}
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default ModalSearch;
