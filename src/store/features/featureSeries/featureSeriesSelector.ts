import { RootState } from '../../store';
import { createSelector } from 'reselect';

export const selectSeries = createSelector(
    (state: RootState) => state.seriesReducer.loadingStatus,
    (state: RootState) => state.seriesReducer.series,
    (loadingStatus, series) => ({
        loadingStatus,
        data: series,
    })
);

