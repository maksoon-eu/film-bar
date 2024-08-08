import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks/selector.hook';
import { compareGenreToGenreWithSlug } from '../../service/compareGenreToGenreWithSlug';
import { selectGenres } from '../../store/features/featureGenres/featureGenresSelectors';
import { NameItem } from '../../store/types/types';
import styles from './genresList.module.scss';
import { IGenre } from '../../store/features/featureGenres/featureGenresTypes';

interface GenresListProps {
    genres: NameItem[];
}

const GenresList: React.FC<GenresListProps> = ({ genres }) => {
    // const [modGenres, setModGenres] = useState<IGenre[]>([]);

    // const { loadingStatus, genres: genresWithSlug } = useAppSelector(selectGenres);

    // useEffect(() => {
    //     if (genresWithSlug.length) {
    //         const modifiedGenres = compareGenreToGenreWithSlug(genresWithSlug, genres);
    //         setModGenres(modifiedGenres);
    //     }
    // }, [genresWithSlug, genres]);

    const genresList = genres.map((genre) => {
        // const modGenre = modGenres[i];
        const imagePath = require(`../../assets/icon/${genre.name}.png`);

        // if (modGenre) {
            return (
                <div key={genre.name} className={styles.genreList__item}>
                    <img
                        src={imagePath}
                        alt=""
                        className={styles.genreList__item_img}
                    />
                    <div className={styles.genreList__item_name}>{genre.name}</div>
                </div>
            );
        // }
    });

    return <div className={styles.genresList}>{genresList}</div>;
};

export default GenresList;
