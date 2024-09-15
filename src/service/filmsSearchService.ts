import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFilmsSearch } from '../store/features/featureFilmsSearch/featureFilmsSearchType';
import { request } from '../utils/api';

export const getFilmsSearch = createAsyncThunk<IFilmsSearch[], string, { rejectValue: string }>(
    'films/getFilmsSearch',
    async (filmName, thunkAPI) => {
        try {
            const response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1_4}movie/search?page=1&limit=10&query=${filmName}`,
            });

            if (!response.docs || response.docs.length === 0) {
                return thunkAPI.rejectWithValue('Film not found');
            }

            return response.docs;
        } catch (e) {
            if (e instanceof Error) {
                return thunkAPI.rejectWithValue(e.message);
            }

            return thunkAPI.rejectWithValue('An unknown error occurred');
        }
    }
);
