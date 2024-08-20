import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IFilmSlider } from "../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes";

export const getSeries = createAsyncThunk<IFilmSlider[], void, { rejectValue: string }>(
    'series/getSeries',
    async (_, thunkAPI) => {
        try {
            const response = request({ url: `${process.env.REACT_APP_TEST_API_BASE}series` });
            // https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=seriesLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=seriesLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=top250&sortField=rating.kp&sortType=-1&typeNumber=2

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
