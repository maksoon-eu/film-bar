import { IFilmsSliderPopularSlice } from '../features/filmsSliderPopular/types/featureFilmsSliderPopularTypes';
import { IFilmsSliderMainSlice } from '../features/filmsSliderMain/types/featureFilmsSliderMainTypes';
import { IFilmsSliderNewSlice } from '../features/filmsSliderNew/types/featureFilmsSliderNewTypes';
import { IFilmsCatalogSlice } from '../features/filmsCatalog/types/featureFilmsCatalogTypes';
import { IFilmsSearchSlice } from '../features/filmsSearch/types/featureFilmsSearchType';
import { ICountriesSlice } from '../features/countries/types/featureCountriesType';
import { ITrailersSlice } from '../features/trailers/types/featureTrailersType';
import { IGenresSlice } from '../features/genres/types/featureGenresTypes';
import { ISeriesSlice } from '../features/series/types/featureSeriesTypes';
import { IFilmSlice } from '../features/film/types/featureFilmType';
import { Action, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { IGlobalStore } from '../global/globalStoreTypes';
import { store } from '../store';

export interface StateSchema {
    filmsSliderMain: IFilmsSliderMainSlice;
    filmsSliderNew: IFilmsSliderNewSlice;
    genres: IGenresSlice;
    trailers: ITrailersSlice;
    filmsSliderPopular: IFilmsSliderPopularSlice;
    series: ISeriesSlice;
    film: IFilmSlice;
    filmsCatalog: IFilmsCatalogSlice;
    countries: ICountriesSlice;
    global: IGlobalStore;
    filmsSearch?: IFilmsSearchSlice;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export interface ReducerManager {
    getReducerMap: () => Partial<Record<StateSchemaKey, Reducer>>;
    reduce: (state: StateSchema | undefined, action: Action) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export type StateSchemaKey = keyof StateSchema;
