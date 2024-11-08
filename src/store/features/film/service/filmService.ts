import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../../utils/api';
import { IFilm } from '../types/featureFilmType';
import { AppDispatch } from '../../../config/StateSchema';

export const getFilm = createAsyncThunk<
    IFilm,
    string,
    { dispatch: AppDispatch; rejectValue: string }
>('films/getFilm', async (id, { dispatch, rejectWithValue }) => {
    try {
        const response = await request({
            url: `${process.env.REACT_APP_API_BASE_V1_4}movie/${id}`,
            dispatch,
        });

        if (!response) {
            return rejectWithValue('Incorrect response');
        }

        return response;
    } catch (e) {
        if (e instanceof Error) {
            return rejectWithValue(e.message);
        }

        return rejectWithValue('An unknown error occurred');
    }
});
