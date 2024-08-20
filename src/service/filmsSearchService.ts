import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFilmsSearch } from '../store/features/featureFilmsSearch/featureFilmsSearchType';
import { request } from '../utils/api';

export const getFilmsSearch = createAsyncThunk<IFilmsSearch[], void, { rejectValue: string }>(
    'films/getFilmsSearch',
    async (_, thunkAPI) => {
        try {
            const response = request({ url: `${process.env.REACT_APP_TEST_API_BASE}search` });

            if (!response) {
                throw new Error();
            }

            return response;
        } catch (e) {
            if (e instanceof Error) {
                return thunkAPI.rejectWithValue(e.message);
            }
        }
    }
);
