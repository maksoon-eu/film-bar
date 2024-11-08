import { StateSchema } from '../../../config/StateSchema';
import { createSelector } from 'reselect';

export const selectFilmsSliderPopular = createSelector(
    (state: StateSchema) => state.filmsSliderPopular.loadingStatus,
    (state: StateSchema) => state.filmsSliderPopular.filmsSliderPopular,
    (loadingStatus, filmsSliderPopular) => ({
        loadingStatus,
        data: filmsSliderPopular,
    })
);
