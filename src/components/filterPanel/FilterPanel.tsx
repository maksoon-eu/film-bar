import { selectGenres } from '../../store/features/genres/selectors/featureGenresSelectors';
import { getGenres } from '../../store/features/genres/service/genresService';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Dropdown from '../../shared/dropdown/Dropdown';

import { selectCountries } from '../../store/features/countries/selectors/getCountries';
import { getCountries } from '../../store/features/countries/service/countriesService';
import styles from './filterPanel.module.scss';

const FilterPanel = () => {
    const { genres, loadingStatus: loadingStatusGenres } = useSelector(selectGenres);
    const { countries, loadingStatus: loadingStatusCountries } = useSelector(selectCountries);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenres());
        }
        if (!countries.length) {
            dispatch(getCountries());
        }
    }, [dispatch]);

    return (
        <div className={styles.filterPanel}>
            <div className={styles.filterPanel__inner}>
                <Dropdown
                    list={genres}
                    path={'genres'}
                    title={'Жанр'}
                    filter={'genres'}
                    loadingStatus={loadingStatusGenres}
                />
                <Dropdown
                    list={countries}
                    path={'countries'}
                    title={'Страна'}
                    filter={'countries'}
                    loadingStatus={loadingStatusCountries}
                />
            </div>
        </div>
    );
};

export default FilterPanel;
