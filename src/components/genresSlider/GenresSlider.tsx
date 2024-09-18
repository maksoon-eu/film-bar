import { useAppSelector } from '../../hooks/selector.hook';
import { selectGenres } from '../../store/features/featureGenres/featureGenresSelectors';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useEffect, useMemo } from 'react';
import { getGenres } from '../../service/genresService';
import { sliderSettingsGenres } from "../../settings/sliderSettings";

import Slider from 'react-slick';
import SkeletonGenresSlider from '../../shared/skeleton/SkeletonGenresSlider';

import styles from './genresSlider.module.scss';

const GenresSlider = () => {
    const dispatch = useAppDispatch();
    const { loadingStatus, genres } = useAppSelector(selectGenres);

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenres());
        }
    }, [dispatch, genres.length]);

    const genresList = useMemo(
        () =>
            genres.map((genre) => {
                const name = genre.name;

                const imagePath = require(`../../assets/genres/${name}.png`);

                return (
                    <div key={name}>
                        <div className={styles.genresSlider__group}>
                            <div className={styles.genresSlider__item}>
                                <img
                                    src={imagePath}
                                    alt={name}
                                    className={styles.genresSlider__item_img}
                                />
                                <div className={styles.genresSlider__item_name}>{`${name
                                    .charAt(0)
                                    .toUpperCase()}${name.slice(1)}`}</div>
                            </div>
                        </div>
                    </div>
                );
            }),
        [genres]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonGenresSlider />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return (
        <div className={styles.genresSlider}>
            <div className="title">Жанры</div>
            <Slider {...sliderSettingsGenres}>{genresList}</Slider>
        </div>
    );
};

export default GenresSlider;
