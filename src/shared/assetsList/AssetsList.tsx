import { NameItem } from '../../types/types';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

import ConditionalComponent from '../conditionalComponent/ConditionalComponent';

import styles from './assetsList.module.scss';

interface AssetsListProps {
    list: NameItem[];
    path: string;
    styleAsset?: string;
}

const AssetsList = ({ list, path, styleAsset }: AssetsListProps) => {
    const assetsList = list.map((item) => {
        const name = item.name;

        let imagePath = null;
        try {
            imagePath = require(`../../assets/${path}/${name}.png`);
        } catch {
            imagePath = null;
        }

        return (
            <div key={name} className={styles.assetsList__item}>
                <ConditionalComponent value={imagePath}>
                    <img src={imagePath} alt="" className={styles.assetsList__item_img} />
                </ConditionalComponent>
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
