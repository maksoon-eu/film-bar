import { Action, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { IFilmSlice } from '../features/film/types/featureFilmType';
import { IFilmsSlice } from '../features/films/types/featureFilmsTypes';
import { IFilmsCatalogSlice } from '../features/filmsCatalog/types/featureFilmsCatalogTypes';
import { IFilmsSearchSlice } from '../features/filmsSearch/types/featureFilmsSearchType';
import { IFilmsSliderNewSlice } from '../features/filmsSliderNew/types/featureFilmsSliderNewTypes';
import { IFilmsSliderPopularSlice } from '../features/filmsSliderPopular/types/featureFilmsSliderPopularTypes';
import { IGenresSlice } from '../features/genres/types/featureGenresTypes';
import { ISeriesSlice } from '../features/series/types/featureSeriesTypes';
import { ITrailersSlice } from '../features/trailers/types/featureTrailersType';
import { IGlobalStore } from '../global/globalStoreTypes';
import { store } from "../store";

export interface StateSchema {
    films: IFilmsSlice;
    filmsSliderNew: IFilmsSliderNewSlice;
    genres: IGenresSlice;
    trailers: ITrailersSlice;
    filmsSliderPopular: IFilmsSliderPopularSlice;
    series: ISeriesSlice;
    film: IFilmSlice;
    filmsCatalog: IFilmsCatalogSlice;
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
