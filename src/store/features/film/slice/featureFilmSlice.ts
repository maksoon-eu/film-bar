import { createSlice } from '@reduxjs/toolkit';
import { IFilmSlice } from '../types/featureFilmType';
import { getFilm } from "../service/filmService";

const initialState: IFilmSlice = {
    film: [],
    loadingStatus: 'idle',
};

const featureFilmSlice = createSlice({
    name: 'featureFilm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilm.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getFilm.fulfilled, (state, action) => {
                state.film = [action.payload];
                state.loadingStatus = 'idle';
            })
            .addCase(getFilm.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: filmReducer } = featureFilmSlice;
export const { actions: filmActions } = featureFilmSlice;
