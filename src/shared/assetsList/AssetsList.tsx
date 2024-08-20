import { NameItem } from '../../store/types/types';

import styles from './assetsList.module.scss';

interface AssetsListProps {
    list: NameItem[];
    path: string;
}

const AssetsList = ({ list, path }: AssetsListProps) => {
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
                {imagePath ? (
                    <img src={imagePath} alt="" className={styles.assetsList__item_img} />
                ) : null}
                <div className={styles.assetsList__item_name}>{name}</div>
            </div>
        );
    });

    return <div className={styles.assetsList}>{assetsList}</div>;
};

export default AssetsList;
