import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IGenre } from '../store/features/featureGenres/featureGenresTypes';

export const getGenres = createAsyncThunk<IGenre[], void, { rejectValue: string }>(
    'genres/getGenres',
    async (_, thunkAPI) => {
        try {
            const response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1}movie/possible-values-by-field?field=genres.name`,
            });

            if (!response || response.length === 0) {
                return thunkAPI.rejectWithValue('Film not found');
            }

            return response;
        } catch (e) {
            if (e instanceof Error) {
                return thunkAPI.rejectWithValue(e.message);
            }

            return thunkAPI.rejectWithValue('An unknown error occurred');
        }
    }
);
