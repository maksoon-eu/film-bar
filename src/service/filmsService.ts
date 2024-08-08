import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFilm } from "../store/features/featuresMovie/featuresMovieType";
import { request } from "../utils/api";

export const getFilms = createAsyncThunk<IFilm[], void, { rejectValue: string }>(
    'films/getFilms',
    async (state, thunkAPI) => {
        try {
            // https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=enName&selectFields=alternativeName&selectFields=description&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=countries&selectFields=backdrop&selectFields=logo&selectFields=top250&notNullFields=id&notNullFields=name&notNullFields=enName&notNullFields=alternativeName&notNullFields=description&notNullFields=shortDescription&notNullFields=year&notNullFields=rating.imdb&notNullFields=ageRating&notNullFields=genres.name&notNullFields=countries.name&notNullFields=backdrop.url&notNullFields=logo.url&notNullFields=top250&sortField=rating.imdb&sortType=1
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
