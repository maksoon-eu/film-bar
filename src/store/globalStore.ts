import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    forbiddenError: false,
};

const globalSlice = createSlice({
    name: 'globalStore',
    initialState,
    reducers: {
        setForbiddenError: (state) => {
            state.forbiddenError = true;
        },
        resetForbiddenError: (state) => {
            state.forbiddenError = false;
        },
    },
});

export const globalReducer = globalSlice.reducer;
export const { setForbiddenError, resetForbiddenError } = globalSlice.actions;
