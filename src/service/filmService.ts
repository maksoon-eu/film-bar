import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IFilm } from '../store/features/featureFilm/featureFilmType';

export const getFilm = createAsyncThunk<IFilm, string, { rejectValue: string }>(
    'films/getFilm',
    async (id, thunkAPI) => {
        try {
            const response = request({ url: `${process.env.REACT_APP_TEST_API_BASE}film/${id}` });

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
