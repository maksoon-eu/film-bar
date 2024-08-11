import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks/selector.hook';
import { compareGenreToGenreWithSlug } from '../../service/compareGenreToGenreWithSlug';
import { selectGenres } from '../../store/features/featureGenres/featureGenresSelectors';
import { NameItem } from '../../store/types/types';
import styles from './assetsList.module.scss';
import { IGenre } from '../../store/features/featureGenres/featureGenresTypes';

interface AssetsListProps {
    list: NameItem[];
    path: string;
}

const AssetsList: React.FC<AssetsListProps> = ({ list, path }) => {
    // const [modGenres, setModGenres] = useState<IGenre[]>([]);

    // const { loadingStatus, genres: genresWithSlug } = useAppSelector(selectGenres);

    // useEffect(() => {
    //     if (genresWithSlug.length) {
    //         const modifiedGenres = compareGenreToGenreWithSlug(genresWithSlug, genres);
    //         setModGenres(modifiedGenres);
    //     }
    // }, [genresWithSlug, genres]);

    const assetsList = list.map((item) => {
        // const modGenre = modGenres[i];
        let imagePath = null;
        try {
            imagePath = require(`../../assets/${path}/${item.name}.png`);
        } catch {
            imagePath = null;
        }

        // if (modGenre) {
        return (
            <div key={item.name} className={styles.assetsList__item}>
                {imagePath ? (
                    <img src={imagePath} alt="" className={styles.assetsList__item_img} />
                ) : null}
                <div className={styles.assetsList__item_name}>{item.name}</div>
            </div>
        );
        // }
    });

    return <div className={styles.assetsList}>{assetsList}</div>;
};

export default AssetsList;
