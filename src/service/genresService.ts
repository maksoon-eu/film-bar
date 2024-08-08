import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IGenre, IGenres } from '../store/features/featureGenres/featureGenresTypes';

export const getGenres = createAsyncThunk<IGenre[], void, { rejectValue: string }>(
    'genres/getGenres',
    async (state, thunkAPI) => {
        try {
            // https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name
            const response = await request({ url: `${process.env.REACT_APP_TEST_API_BASE}allGenres` });

            if (!response) {
                throw new Error();
            }

            return response;
        } catch (e) {
            if (e instanceof Error) {
                thunkAPI.rejectWithValue(e.message);
            }
        }
    }
);
