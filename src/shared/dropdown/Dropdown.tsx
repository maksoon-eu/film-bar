import {
    FiltersVariant,
    IFilters,
} from '../../store/features/filmsCatalog/types/featureFilmsCatalogTypes';
import { filmsCatalogActions } from '../../store/features/filmsCatalog/slice/featureFilmsCatalogSlice';
import { getFilmsCatalog } from '../../store/features/filmsCatalog/service/filmsCatalogService';
import { LoadingStatusType, NameItem, Path } from '../../types/types';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useCallback, useState } from 'react';

import AssetsList from '../assetsList/AssetsList';

import loader from '../../assets/loader/error-loader.svg';

import styles from './dropdown.module.scss';

interface DropdownProps {
    title: string;
    list: NameItem[];
    path?: Path;
    filter: FiltersVariant;
    loadingStatus: LoadingStatusType;
    styleAsset?: string;
}

const Dropdown = ({ title, list, path, filter, loadingStatus, styleAsset }: DropdownProps) => {
    const [dropdownActive, setDropdownActive] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const toggleDropdown = () => {
        setDropdownActive((dropdownActive) => !dropdownActive);
    };

    const changeFilter = useCallback((filter: IFilters) => {
        dispatch(filmsCatalogActions.changeFilter(filter));
        dispatch(getFilmsCatalog());
    }, []);

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown__inner}>
                <div className={styles.dropdown__inner_title}>
                    {loadingStatus === 'loading' ? (
                        <img src={loader} alt="loader" />
                    ) : (
                        <span onClick={toggleDropdown}>{title}</span>
                    )}
                </div>
                {loadingStatus !== 'loading' && (
                    <div
                        className={`${styles.dropdown__inner_list} ${dropdownActive ? styles['dropdown__inner_list_active'] : ''}`}>
                        <AssetsList
                            list={list}
                            styleAsset={styleAsset}
                            path={path}
                            clickFn={changeFilter}
                            filter={filter}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
