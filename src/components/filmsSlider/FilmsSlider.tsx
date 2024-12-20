import React, { useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import { LoadingStatusType } from '../../types/types';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useAppSelector } from '../../hooks/selector.hook';
import { AsyncThunk } from '@reduxjs/toolkit';
import { IFilmSlider } from '../../store/features/filmsSliderNew/types/featureFilmsSliderNewTypes';
import { sliderSettingsAssets } from '../../settings/sliderSettings';
import { StateSchema } from '../../store/config/StateSchema';

import FilmsItem from '../filmsItem/FilmsItem';
import SkeletonFilmsSlider from '../../shared/skeleton/SkeletonFilmsSlider';

import styles from './filmsSlider.module.scss';

interface FilmsSliderProps {
    title: string;
    selector: (state: StateSchema) => { loadingStatus: LoadingStatusType; data: IFilmSlider[] };
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
        return items.map((item) => <FilmsItem film={item} key={item.id} />);
    }, [items]);

    if (loadingStatus === 'loading') {
        return <SkeletonFilmsSlider count={4} />;
    } else if (loadingStatus === 'error') {
        return <SkeletonFilmsSlider count={4} />;
    }

    return (
        <div className={styles.filmsSlider}>
            <div className="title">{title}</div>
            <Slider {...sliderSettingsAssets}>{itemsList}</Slider>
        </div>
    );
});

export default FilmsSlider;
