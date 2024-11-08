import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectFilms } from "../../store/features/films/selectors/featureFilmsSelectors";
import { getFilms } from '../../store/features/films/service/filmsService';
import { useEffect, useMemo } from 'react';
import { sliderSettingsMain } from '../../settings/sliderSettings';

import Slider from 'react-slick';
import MainSliderItem from '../mainSliderItem/MainSliderItem';
import SkeletonMainSlider from '../../shared/skeleton/SkeletonMainSlider';

import styles from './mainSlider.module.scss';

const MainSlider = () => {
    const dispatch = useAppDispatch();
    const { loadingStatus, films } = useAppSelector(selectFilms);

    useEffect(() => {
        if (!films.length) {
            dispatch(getFilms());
        }
    }, [dispatch, films.length]);

    const filmList = useMemo(() => {
        return films.map((film) => {
            return (
                <div key={film.id}>
                    <MainSliderItem film={film} />
                </div>
            );
        });
    }, [films]);

    if (loadingStatus === 'loading') {
        return <SkeletonMainSlider />;
    } else if (loadingStatus === 'error') {
        return <SkeletonMainSlider />;
    }

    return (
        <div className={styles.mainSlider}>
            <Slider {...sliderSettingsMain}>{filmList}</Slider>
        </div>
    );
};

export default MainSlider;
