import React, { useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import { LoadingStatusType } from '../../types/types';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { RootState } from '../../store/store';
import { AsyncThunk } from '@reduxjs/toolkit';
import { IFilmSlider } from '../../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes';

import FilmsSliderItem from '../filmsSliderItem/FilmsSliderItem';
import SkeletonFilmsSlider from '../../shared/skeleton/SkeletonFilmsSlider';
import { NextArrow, PrevArrow } from '../arrows/Arrows';

import styles from './filmsSlider.module.scss';

interface FilmsSliderProps {
    title: string;
    selector: (state: RootState) => { loadingStatus: LoadingStatusType; data: IFilmSlider[] };
    fetchData: AsyncThunk<IFilmSlider[], void, { rejectValue: string }>;
}

const FilmsSlider = React.memo(({ title, selector, fetchData }: FilmsSliderProps) => {
    const dispatch = useAppDispatch();
    const { loadingStatus, data: items } = useAppSelector(selector);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchData());
        }
    }, [dispatch, fetchData, items.length]);

    const itemsList = useMemo(() => {
        return items.map((item) => <FilmsSliderItem film={item} key={item.id} />);
    }, [items]);

    if (loadingStatus === 'loading') {
        return <SkeletonFilmsSlider />;
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

    return (
        <div className={styles.filmsSlider}>
            <div className="title">{title}</div>
            <Slider {...settings}>{itemsList}</Slider>
        </div>
    );
});

export default FilmsSlider;
