import { ICountriesSlice } from '../types/featureCountriesType';
import { getCountries } from '../service/countriesService';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICountriesSlice = {
    countries: [],
    loadingStatus: 'idle',
};

const featureCountriesSlice = createSlice({
    name: 'featureCountries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCountries.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getCountries.fulfilled, (state, action) => {
                state.loadingStatus = 'idle';
                state.countries = action.payload;
            })
            .addCase(getCountries.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: countriesReducer } = featureCountriesSlice;
export const { actions: countriesActions } = featureCountriesSlice;
