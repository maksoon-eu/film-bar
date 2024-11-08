import { createSlice } from '@reduxjs/toolkit';
import { IFilmsCatalogSlice } from '../types/featureFilmsCatalogTypes';
import { getFilmsCatalog } from '../service/filmsCatalogService';
import { getFilmsSliderNew } from '../../filmsSliderNew/service/filmsSliderNewService';

const initialState: IFilmsCatalogSlice = {
    filmsCatalog: [],
    page: 1,
    loadingStatus: 'idle',
};

const filmsCatalogSlice = createSlice({
    name: 'featuresFilmsCatalog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsCatalog.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getFilmsCatalog.fulfilled, (state, action) => {
                state.filmsCatalog = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getFilmsSliderNew.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: filmsCatalogReducer } = filmsCatalogSlice;
export const { actions: filmsCatalogActions } = filmsCatalogSlice;
