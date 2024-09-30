import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IFilms } from '../store/features/featureFilms/featureFilmsTypes';
import { AppDispatch } from '../store/store';

export const getFilmsCatalog = createAsyncThunk<
    IFilms[],
    string,
    { dispatch: AppDispatch; rejectValue: string }
>('films/getFilmsCatalog', async (url, { dispatch, rejectWithValue }) => {
    try {
        const response = await request({ url, dispatch });

        if (!response.docs) {
            return rejectWithValue('Films not found');
        }

        return response;
    } catch (e) {
        if (e instanceof Error) {
            return rejectWithValue(e.message);
        }
    }
});
