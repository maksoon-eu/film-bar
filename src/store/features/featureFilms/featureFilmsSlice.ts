import { createSlice } from '@reduxjs/toolkit';
import { getFilms } from '../../../service/filmsService';
import { IFilmsSlice } from './featureFilmsTypes';

const initialState: IFilmsSlice = {
    films: [],
    loadingStatus: 'idle',
};

const featuresMoviesSlice = createSlice({
    name: 'featuresMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilms.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getFilms.fulfilled, (state, action) => {
                state.films = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getFilms.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: moviesReducer } = featuresMoviesSlice;
export const { actions: moviesActions } = featuresMoviesSlice;
