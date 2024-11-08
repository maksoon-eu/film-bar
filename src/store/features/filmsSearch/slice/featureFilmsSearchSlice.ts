import { createSlice } from '@reduxjs/toolkit';
import { IFilmsSearchSlice } from '../types/featureFilmsSearchType';
import { getFilmsSearch } from '../service/filmsSearchService';

const initialState: IFilmsSearchSlice = {
    filmsSearch: [],
    loadingStatus: 'idle',
};

const featureFilmsSearchSlice = createSlice({
    name: 'featureFilmsSearch',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsSearch.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(getFilmsSearch.fulfilled, (state, action) => {
                state.filmsSearch = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(getFilmsSearch.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: filmsSearchReducer } = featureFilmsSearchSlice;
export const { actions: filmsSearchActions } = featureFilmsSearchSlice;
