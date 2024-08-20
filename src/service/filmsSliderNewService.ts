import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IFilmSlider } from '../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes';

export const getFilmsSliderNew = createAsyncThunk<IFilmSlider[], void, { rejectValue: string }>(
    'films/getFilmsSliderNew',
    async (_, thunkAPI) => {
        try {
            // https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=ageRating&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=rating.kp&sortType=-1&year=2024&typeNumber=1
            const response = await request({ url: `${process.env.REACT_APP_TEST_API_BASE}filmsNew` });

            if (!response) {
                throw new Error();
            }

            // return response.docs;
            return response;
        } catch (e) {
            if (e instanceof Error) {
                return thunkAPI.rejectWithValue(e.message);
            }
        }
    }
);
