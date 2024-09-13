import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { ITrailers } from '../store/features/featureTrailers/featureTrailersType';

export const getTrailers = createAsyncThunk<ITrailers[], void, { rejectValue: string }>(
    'trailers/gerTrailers',
    async (_, thunkAPI) => {
        try {
            const response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1_4}movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=rating&selectFields=poster&selectFields=videos&selectFields=backdrop&notNullFields=id&notNullFields=name&notNullFields=rating.kp&notNullFields=poster.url&notNullFields=videos.trailers.url&sortField=rating.kp&sortType=-1&year=2024`,
            });
            // https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=rating&selectFields=poster&selectFields=videos&notNullFields=id&notNullFields=name&notNullFields=rating.kp&notNullFields=poster.url&notNullFields=videos.trailers.url&sortField=rating.kp&sortType=-1&year=2024

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
