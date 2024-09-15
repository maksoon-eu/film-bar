import { LoadingStatusType } from '../../types/types';
import { IFilm } from '../../store/features/featureFilm/featureFilmType';
import { useMemo } from 'react';

import { NextArrow, PrevArrow } from '../arrows/Arrows';
import Slider from 'react-slick';
import SequelAndPrequelSliderItem from '../sequelAndPrequelSliderItem/SequelAndPrequelSliderItem';
import SkeletonFilmsSlider from '../../shared/skeleton/SkeletonFilmsSlider';

import styles from './sequelAndPrequelSlider.module.scss';

interface ISequelAndPrequelSlider {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}

const SequelAndPrequelSlider = ({ film, loadingStatus }: ISequelAndPrequelSlider) => {
    const sequelAndPrequelSliderList = useMemo(
        () =>
            film[0]?.sequelsAndPrequels?.map((item) => {
                return <SequelAndPrequelSliderItem key={item.id} film={item} />;
            }),
        [film]
    );

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        touchThreshold: 50,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const sequelAndPrequelList = useMemo(
        () =>
            film[0]?.sequelsAndPrequels && (
                <div className={styles.sequelAndPrequelSlider}>
                    <div className="title">Сиквелы и приквелы</div>
                    <Slider {...settings}>{sequelAndPrequelSliderList}</Slider>
                </div>
            ),
        [film]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonFilmsSlider />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <>{sequelAndPrequelList}</>;
};

export default SequelAndPrequelSlider;
