import { StateSchema } from '../../../config/StateSchema';
import { createSelector } from 'reselect';

export const selectFilmsSliderNew = createSelector(
    (state: StateSchema) => state.filmsSliderNew.loadingStatus,
    (state: StateSchema) => state.filmsSliderNew.filmsSliderNew,
    (loadingStatus, filmsSliderNew) => ({
        loadingStatus,
        data: filmsSliderNew,
    })
);
