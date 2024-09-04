import { RootState } from '../../store';
import { createSelector } from 'reselect';

export const selectFilmsSliderNew = createSelector(
    (state: RootState) => state.filmsSliderNewReducer.loadingStatus,
    (state: RootState) => state.filmsSliderNewReducer.filmsSliderNew,
    (loadingStatus, filmsSliderNew) => ({
        loadingStatus,
        data: filmsSliderNew,
    })
);
