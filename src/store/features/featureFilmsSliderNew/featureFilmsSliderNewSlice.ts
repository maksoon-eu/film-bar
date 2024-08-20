import { createSlice } from '@reduxjs/toolkit';
import { getFilmsSliderNew } from '../../../service/filmsSliderNewService';
import { IFilmsSliderNewSlice } from './featureFilmsSliderNewTypes';

const initialState: IFilmsSliderNewSlice = {
    filmsSliderNew: [],
    loadingStatus: 'idle',
};

const featureFilmsSliderNewSlice = createSlice({
    name: 'featuresFilmsSliderNew',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsSliderNew.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getFilmsSliderNew.fulfilled, (state, action) => {
                state.filmsSliderNew = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getFilmsSliderNew.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: filmsSliderNewReducer } = featureFilmsSliderNewSlice;
export const { actions: filmsSliderNewActions } = featureFilmsSliderNewSlice;
