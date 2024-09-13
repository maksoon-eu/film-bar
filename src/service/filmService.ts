import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IFilm } from '../store/features/featureFilm/featureFilmType';

export const getFilm = createAsyncThunk<IFilm, string, { rejectValue: string }>(
    'films/getFilm',
    async (id, thunkAPI) => {
        try {
            const response = await request({ url: `${process.env.REACT_APP_API_BASE_V1_4}movie/${id}` });

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

