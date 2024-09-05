import { createSlice } from '@reduxjs/toolkit';
import { getFilms } from '../../../service/filmsService';
import { IFilmsSlice } from './featureFilmsTypes';

const initialState: IFilmsSlice = {
    films: [],
    loadingStatus: 'idle',
};

const featureFilmsSlice = createSlice({
    name: 'featureFilms',
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

export const { reducer: filmsReducer } = featureFilmsSlice;
export const { actions: filmsActions } = featureFilmsSlice;
