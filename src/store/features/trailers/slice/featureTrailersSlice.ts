import { createSlice } from '@reduxjs/toolkit';
import { getTrailers } from '../service/trailersService';
import { ITrailersSlice } from '../types/featureTrailersType';

const initialState: ITrailersSlice = {
    trailers: [],
    loadingStatus: 'idle',
};

const featuresTrailersSlice = createSlice({
    name: 'featuresTrailers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTrailers.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getTrailers.fulfilled, (state, action) => {
                state.trailers = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getTrailers.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: trailersReducer } = featuresTrailersSlice;
export const { actions: trailersActions } = featuresTrailersSlice;
