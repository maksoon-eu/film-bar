import { createSlice } from '@reduxjs/toolkit';
import { getFilmsSliderMain } from '../service/filmsSliderMainService';
import { IFilmsSliderMainSlice } from '../types/featureFilmsSliderMainTypes';

const initialState: IFilmsSliderMainSlice = {
    films: [],
    loadingStatus: 'idle',
};

const featureFilmsSliderMainSlice = createSlice({
    name: 'featureFilmsSliderMain',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsSliderMain.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getFilmsSliderMain.fulfilled, (state, action) => {
                state.films = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getFilmsSliderMain.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: filmsSliderMainReducer } = featureFilmsSliderMainSlice;
export const { actions: filmsSliderMainActions } = featureFilmsSliderMainSlice;
