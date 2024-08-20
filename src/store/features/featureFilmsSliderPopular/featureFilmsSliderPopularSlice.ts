import { createSlice } from '@reduxjs/toolkit';
import { getFilmsSliderPopular } from '../../../service/filmsSliderPopularService';
import { IFilmsSliderPopularSlice } from './featureFilmsSliderPopularTypes';

const initialState: IFilmsSliderPopularSlice = {
    filmsSliderPopular: [],
    loadingStatus: 'idle',
};

const featureFilmsSliderPopularSlice = createSlice({
    name: 'featuresFilmsSliderPopular',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsSliderPopular.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getFilmsSliderPopular.fulfilled, (state, action) => {
                state.filmsSliderPopular = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getFilmsSliderPopular.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: filmsSliderPopularReducer } = featureFilmsSliderPopularSlice;
export const { actions: filmsSliderPopularActions } = featureFilmsSliderPopularSlice;
