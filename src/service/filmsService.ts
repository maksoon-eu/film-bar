import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFilms } from '../store/features/featureFilms/featureFilmsTypes';
import { request } from '../utils/api';

export const getFilms = createAsyncThunk<IFilms[], void, { rejectValue: string }>(
    'films/getFilms',
    async (_, thunkAPI) => {
        try {
            const response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1_4}movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=description&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=countries&selectFields=backdrop&selectFields=logo&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=rating.kp&notNullFields=rating.imdb&notNullFields=ageRating&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=backdrop.url&notNullFields=logo.url&notNullFields=top250&sortField=externalId.imdb&sortType=-1`,
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
