import { StateSchema } from "../../../config/StateSchema";
import { createSelector } from 'reselect';

export const selectSeries = createSelector(
    (state: StateSchema) => state.series.loadingStatus,
    (state: StateSchema) => state.series.series,
    (loadingStatus, series) => ({
        loadingStatus,
        data: series,
    })
);
