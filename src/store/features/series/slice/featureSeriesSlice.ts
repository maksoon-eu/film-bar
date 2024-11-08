import { createSlice } from '@reduxjs/toolkit';
import { ISeriesSlice } from '../types/featureSeriesTypes';
import { getSeries } from '../service/seriesService';

const initialState: ISeriesSlice = {
    series: [],
    loadingStatus: 'idle',
};

const featureSeriesSlice = createSlice({
    name: 'featuresSeries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSeries.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getSeries.fulfilled, (state, action) => {
                state.series = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getSeries.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: seriesReducer } = featureSeriesSlice;
export const { actions: seriesActions } = featureSeriesSlice;
