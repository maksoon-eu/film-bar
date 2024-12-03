import { selectFilmsCatalog } from '../../store/features/filmsCatalog/selectors/featureFilmsCatalogSelectors';
import { getFilmsCatalog } from '../../store/features/filmsCatalog/service/filmsCatalogService';
import { usePagination } from '../../hooks/pagination.hook';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { useEffect, useMemo, useRef } from 'react';

import SkeletonFilmsCatalog from '../../shared/skeleton/SkeletonFilmsCatalog';
import FilmsItem from '../filmsItem/FilmsItem';

import styles from './filmsCatalog.module.scss';

const FilmsCatalog = () => {
    const filmsCatalogRef = useRef(null);

    const dispatch = useAppDispatch();
    const { filmsCatalog, loadingStatus } = useAppSelector(selectFilmsCatalog);

    usePagination({
        ref: filmsCatalogRef,
        loadingStatus: loadingStatus,
        fetchData: fetchFilmsCatalog,
        rootMargin: '500px',
    });

    function fetchFilmsCatalog() {
        dispatch(getFilmsCatalog());
    }

    useEffect(() => {
        if (filmsCatalog.length === 0) {
            fetchFilmsCatalog();
        }
    }, [dispatch]);

    const filmsCatalogList = useMemo(() => {
        return filmsCatalog.map((film) => <FilmsItem key={film.id} film={film} />);
    }, [filmsCatalog]);

    if (loadingStatus === 'loading') {
        return <SkeletonFilmsCatalog count={12} />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return (
        <div className={styles.filmsCatalog}>
            <div className={styles.filmsCatalog__inner}>{filmsCatalogList}</div>
            <div ref={filmsCatalogRef} />
        </div>
    );
};

export default FilmsCatalog;
