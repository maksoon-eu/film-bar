import { RootState } from '../../store';

export const selectSeries = (state: RootState) => ({
    loadingStatus: state.seriesReducer.loadingStatus,
    data: state.seriesReducer.series,
});
