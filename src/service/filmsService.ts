import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFilm } from '../store/features/featureFilms/featureFilmsTypes';
import { request } from '../utils/api';
import { IFilmSlider } from '../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes';

export const getFilms = createAsyncThunk<IFilm[], void, { rejectValue: string }>(
    'films/getFilms',
    async (_, thunkAPI) => {
        try {
            // https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=description&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=countries&selectFields=backdrop&selectFields=logo&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=rating.kp&notNullFields=rating.imdb&notNullFields=ageRating&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=backdrop.url&notNullFields=logo.url&notNullFields=top250&sortField=externalId.imdb&sortType=-1
            const response = await request({ url: `${process.env.REACT_APP_TEST_API_BASE}docs` });

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
