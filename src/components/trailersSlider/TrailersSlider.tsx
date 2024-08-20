import Slider from 'react-slick';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectTrailers } from '../../store/features/featureTrailers/featureTrailersSelectors';
import { NextArrow, PrevArrow } from '../arrows/Arrows';
import { useEffect, useMemo } from 'react';
import { getTrailers } from '../../service/trailersService';

import styles from './trailersSlider.module.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import TrailersSliderItem from '../trailersSliderItem/TrailersSliderItem';

const TrailersSlider = () => {
    const dispatch = useAppDispatch();
    const { loadingStatus, trailers } = useAppSelector(selectTrailers);

    useEffect(() => {
        if (!trailers.length) {
            dispatch(getTrailers());
        }
    }, [dispatch, trailers.length]);

    const trailersList = useMemo(() => {
        return trailers.map((trailer) => {
            return <TrailersSliderItem trailer={trailer} key={trailer.id} />;
        });
    }, [trailers]);

    if (loadingStatus === 'loading') {
        return <div>Loading...</div>;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        touchThreshold: 50,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className={styles.trailersSlider}>
            <div className="title">Новые трейлеры</div>
            <Slider {...settings}>{trailersList}</Slider>
        </div>
    );
};

export default TrailersSlider;
