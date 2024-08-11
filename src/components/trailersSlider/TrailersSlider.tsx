import Slider from 'react-slick';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectTrailers } from '../../store/features/featureTrailers/featureTrailersSelectors';
import { NextArrow, PrevArrow } from '../arrows/Arrows';
import styles from './trailersSlider.module.scss';
import { useEffect, useMemo } from "react";
import { getTrailers } from "../../service/trailersService";

const TrailersSlider = () => {
    const dispatch = useAppDispatch();
    const { loadingStatus, trailers } = useAppSelector(selectTrailers);

    useEffect(() => {
        if (!trailers.length) {
            dispatch(getTrailers())
        }
    }, [dispatch, trailers])

    const trailersList = useMemo(() => {
        return trailers.map((trailer) => {
            return (
                <div key={trailer.id}>
                    {trailer.name}
                </div>
            );
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
        slidesToShow: 5,
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
            <Slider {...settings}>{trailersList}</Slider>
        </div>
    );
};

export default TrailersSlider;
