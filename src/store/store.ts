import { filmsSliderPopularReducer } from './features/filmsSliderPopular/slice/featureFilmsSliderPopularSlice';
import { filmsSliderMainReducer } from './features/filmsSliderMain/slice/featureFilmsSliderMainSlice';
import { filmsSliderNewReducer } from './features/filmsSliderNew/slice/featureFilmsSliderNewSlice';
import { filmsCatalogReducer } from './features/filmsCatalog/slice/featureFilmsCatalogSlice';
import { countriesReducer } from './features/countries/slice/featureCountriesSlice';
import { trailersReducer } from './features/trailers/slice/featureTrailersSlice';
import { genresReducer } from './features/genres/slice/featureGenresSlice';
import { seriesReducer } from './features/series/slice/featureSeriesSlice';
import { filmReducer } from './features/film/slice/featureFilmSlice';
import { createReducerManager } from './config/reduceManager';
import { configureStore, Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from './config/StateSchema';
import { globalReducer } from './global/globalStore';

const staticReducers: Partial<Record<StateSchemaKey, Reducer>> = {
    filmsSliderMain: filmsSliderMainReducer,
    filmsSliderNew: filmsSliderNewReducer,
    genres: genresReducer,
    trailers: trailersReducer,
    filmsSliderPopular: filmsSliderPopularReducer,
    series: seriesReducer,
    film: filmReducer,
    filmsCatalog: filmsCatalogReducer,
    countries: countriesReducer,
    global: globalReducer,
};

const reducerManager = createReducerManager(staticReducers);
export const store = configureStore({ reducer: reducerManager.reduce });

// @ts-expect-error: fd
store.reducerManager = reducerManager;
