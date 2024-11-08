import { StateSchema } from '../../../config/StateSchema';
import { createSelector } from 'reselect';

export const selectFilmsSearchFilms = createSelector(
    (state: StateSchema) => state.filmsSearch?.filmsSearch,
    (filmsSearch) => filmsSearch || []
);
