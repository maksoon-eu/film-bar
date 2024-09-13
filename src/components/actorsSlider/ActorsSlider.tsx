import { IFilm } from '../../store/features/featureFilm/featureFilmType';
import { LoadingStatusType } from '../../types/types';
import { useMemo } from 'react';

import { NextArrow, PrevArrow } from '../arrows/Arrows';
import Slider from 'react-slick';
import ActorsSliderItem from '../actorsSliderItem/ActorsSliderItem';
import SkeletonActorsSlider from '../../shared/skeleton/SkeletonActorsSlider';

import styles from './actorsSlider.module.scss';

interface IActorsSlider {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}

const ActorsSlider = ({ film, loadingStatus }: IActorsSlider) => {
    const actorSliderList = useMemo(
        () =>
            film[0]?.persons?.map((person) => (
                <div key={person.id}>
                    <ActorsSliderItem name={person.name || person.enName} photoSrc={person.photo} />
                </div>
            )),
        [film]
    );

    const actorsList = useMemo(
        () =>
            film[0]?.persons && (
                <div className={styles.actorsSlider}>
                    <div className="title">Актеры</div>
                    <Slider {...settings}>{actorSliderList}</Slider>
                </div>
            ),
        [film]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonActorsSlider />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

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

    return <>{actorsList}</>;
};

export default ActorsSlider;
