import { RootState } from '../../store';

export const selectFilms = (state: RootState) => state.filmsReducer;
