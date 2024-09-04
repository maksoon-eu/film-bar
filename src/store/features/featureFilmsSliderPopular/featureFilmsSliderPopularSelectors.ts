import { RootState } from '../../store';
import { createSelector } from 'reselect';

export const selectFilmsSliderPopular = createSelector(
    (state: RootState) => state.filmsSliderPopularReducer.loadingStatus,
    (state: RootState) => state.filmsSliderPopularReducer.filmsSliderPopular,
    (loadingStatus, filmsSliderPopular) => ({
        loadingStatus,
        data: filmsSliderPopular,
    })
);
