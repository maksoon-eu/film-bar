import { RootState } from '../../store';

export const selectFilmsSliderPopular = (state: RootState) => ({
    loadingStatus: state.filmsSliderPopularReducer.loadingStatus,
    data: state.filmsSliderPopularReducer.filmsSliderPopular,
});
