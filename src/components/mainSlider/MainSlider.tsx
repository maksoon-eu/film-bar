import { selectFilmsSliderMain } from '../../store/features/filmsSliderMain/selectors/featureFilmsSliderMainSelectors';
import { getFilmsSliderMain } from '../../store/features/filmsSliderMain/service/filmsSliderMainService';
import { sliderSettingsMain } from '../../settings/sliderSettings';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { useEffect, useMemo } from 'react';

import SkeletonMainSlider from '../../shared/skeleton/SkeletonMainSlider';
import MainSliderItem from '../mainSliderItem/MainSliderItem';
import Slider from 'react-slick';

import styles from './mainSlider.module.scss';

const MainSlider = () => {
    const dispatch = useAppDispatch();
    const { loadingStatus, films } = useAppSelector(selectFilmsSliderMain);

    useEffect(() => {
        if (!films.length) {
            dispatch(getFilmsSliderMain());
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
