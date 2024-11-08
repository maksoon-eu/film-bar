import { configureStore, Reducer } from '@reduxjs/toolkit';
import { filmsReducer } from './features/films/slice/featureFilmsSlice';
import { genresReducer } from './features/genres/slice/featureGenresSlice';
import { trailersReducer } from './features/trailers/slice/featureTrailersSlice';
import { filmsSliderNewReducer } from './features/filmsSliderNew/slice/featureFilmsSliderNewSlice';
import { filmsSliderPopularReducer } from './features/filmsSliderPopular/slice/featureFilmsSliderPopularSlice';
import { seriesReducer } from './features/series/slice/featureSeriesSlice';
import { filmReducer } from './features/film/slice/featureFilmSlice';
import { globalReducer } from './global/globalStore';
import { filmsCatalogReducer } from './features/filmsCatalog/slice/featureFilmsCatalogSlice';
import { StateSchemaKey } from './config/StateSchema';
import { createReducerManager } from './config/reduceManager';

const staticReducers: Partial<Record<StateSchemaKey, Reducer>> = {
    films: filmsReducer,
    filmsSliderNew: filmsSliderNewReducer,
    genres: genresReducer,
    trailers: trailersReducer,
    filmsSliderPopular: filmsSliderPopularReducer,
    series: seriesReducer,
    film: filmReducer,
    filmsCatalog: filmsCatalogReducer,
    global: globalReducer,
};

const reducerManager = createReducerManager(staticReducers);
export const store = configureStore({ reducer: reducerManager.reduce });

// Добавляем менеджер редьюсеров в стор для доступа
// @ts-expect-error: fd
store.reducerManager = reducerManager;
