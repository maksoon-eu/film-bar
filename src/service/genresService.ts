import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IGenre } from '../store/features/featureGenres/featureGenresTypes';
import { AppDispatch } from '../store/store';

export const getGenres = createAsyncThunk<
    IGenre[],
    void,
    { dispatch: AppDispatch; rejectValue: string }
>('genres/getGenres', async (_, { dispatch, rejectWithValue }) => {
    try {
        const response = await request({
            url: `${process.env.REACT_APP_API_BASE_V1}movie/possible-values-by-field?field=genres.name`,
            dispatch,
        });

        if (!response?.length) {
            return rejectWithValue('Film not found');
        }

        return response;
    } catch (e) {
        if (e instanceof Error) {
            return rejectWithValue(e.message);
        }

        return rejectWithValue('An unknown error occurred');
    }
});
