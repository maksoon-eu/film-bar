import { RootState } from '../../store';

export const selectFilmsSliderNew = (state: RootState) => ({
    loadingStatus: state.filmsSliderNewReducer.loadingStatus,
    data: state.filmsSliderNewReducer.filmsSliderNew,
});
