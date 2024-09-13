import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IFilmSlider } from '../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes';

export const getFilmsSliderPopular = createAsyncThunk<IFilmSlider[], void, { rejectValue: string }>(
    'films/getFilmsSliderPopular',
    async (_, thunkAPI) => {
        try {
            const response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1_4}movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=ageRating&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=rating.kp&sortType=-1&typeNumber=1&year=2024`,
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
