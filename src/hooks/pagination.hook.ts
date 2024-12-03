import { filmsCatalogActions } from '../store/features/filmsCatalog/slice/featureFilmsCatalogSlice';
import { LoadingStatusType } from '../types/types';
import { useAppDispatch } from './dispatch.hook';
import { RefObject, useEffect } from 'react';

interface IUsePagination {
    ref: RefObject<HTMLDivElement>;
    loadingStatus: LoadingStatusType;
    fetchData: () => void;
    rootMargin: string;
}

export const usePagination = ({ ref, loadingStatus, fetchData, rootMargin }: IUsePagination) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (loadingStatus === 'loading') {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    dispatch(filmsCatalogActions.updatePage());
                    fetchData();
                }
            },
            { rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [loadingStatus]);
};
