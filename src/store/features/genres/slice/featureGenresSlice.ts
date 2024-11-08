import { createSlice } from '@reduxjs/toolkit';
import { IGenresSlice } from '../types/featureGenresTypes';
import { getGenres } from '../service/genresService';

const initialState: IGenresSlice = {
    genres: [],
    loadingStatus: 'idle',
};

const featureGenresSlice = createSlice({
    name: 'featureGenres',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGenres.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getGenres.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: genresReducer } = featureGenresSlice;
export const { actions: genresAction } = featureGenresSlice;
