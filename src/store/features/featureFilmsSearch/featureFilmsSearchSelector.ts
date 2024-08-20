import { RootState } from '../../store';

export const selectFilmsSearch = (state: RootState) => state.filmsSearchReducer;
