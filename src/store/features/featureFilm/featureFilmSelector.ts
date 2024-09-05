import { RootState } from '../../store';

export const selectFilm = (state: RootState) => state.filmReducer;
