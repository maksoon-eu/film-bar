import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './features/featureFilms/featureFilmsSlice';
import { genresReducer } from './features/featureGenres/featureGenresSlice';
import { trailersReducer } from './features/featureTrailers/featureTrailersSlice';
import { filmsSliderNewReducer } from './features/featureFilmsSliderNew/featureFilmsSliderNewSlice';
import { filmsSliderPopularReducer } from './features/featureFilmsSliderPopular/featureFilmsSliderPopularSlice';
import { seriesReducer } from './features/featureSeries/featureSeriesSlice';
import { filmsSearchReducer } from './features/featureFilmsSearch/featureFilmsSearchSlice';
import { filmReducer } from './features/featureFilm/featureFilmSlice';
import { globalReducer } from './globalStore';

export const store = configureStore({
    reducer: {
        filmsReducer,
        filmsSliderNewReducer,
        genresReducer,
        trailersReducer,
        filmsSliderPopularReducer,
        seriesReducer,
        filmsSearchReducer,
        filmReducer,
        globalReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
