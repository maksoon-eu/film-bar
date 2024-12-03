import {
    FiltersVariant,
    IFilters,
} from '../../store/features/filmsCatalog/types/featureFilmsCatalogTypes';
import { selectFilmsCatalog } from '../../store/features/filmsCatalog/selectors/featureFilmsCatalogSelectors';
import { capitalizeFirstLetter } from '../../utils/ui/capitalizeFirstLetter';
import { NameItem, Path } from '../../types/types';
import { useSelector } from 'react-redux';

import styles from './assetsList.module.scss';

interface AssetsListProps {
    list: NameItem[];
    path?: Path;
    clickFn?: (filter: IFilters) => void;
    styleAsset?: string;
    filter?: FiltersVariant;
}

const AssetsList = ({ list, path, clickFn, styleAsset, filter }: AssetsListProps) => {
    const { filters } = useSelector(selectFilmsCatalog);

    const handleClick = (name: string) => {
        if (clickFn && filter) {
            clickFn({ [filter]: [name] });
        }
    };

    const assetsList = list.map((item) => {
        const name = item.name;

        const activeFilter = filter ? filters[filter].includes(name) : null;

        let imagePath = null;
        try {
            imagePath = require(`../../assets/${path}/${name}.png`);
        } catch {
            imagePath = null;
        }

        return (
            <div
                key={name}
                onClick={() => handleClick(name)}
                className={`${styles.assetsList__item} ${clickFn ? styles.assetsList__item_click : ''} ${activeFilter ? styles.assetsList__item_active : ''}`}>
                {imagePath && (
                    <img src={imagePath} alt="" className={styles.assetsList__item_img} />
                )}
                <div className={styles.assetsList__item_name}>{capitalizeFirstLetter(name)}</div>
            </div>
        );
    });

    return (
        <div className={`${styles.assetsList} ${styleAsset ? styles[styleAsset] : ''}`}>
            {assetsList}
        </div>
    );
};

export default AssetsList;
