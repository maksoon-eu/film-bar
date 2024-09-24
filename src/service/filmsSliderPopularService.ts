import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils/api';
import { IFilmSlider } from '../store/features/featureFilmsSliderNew/featureFilmsSliderNewTypes';
import { AppDispatch } from '../store/store';

export const getFilmsSliderPopular = createAsyncThunk<
    IFilmSlider[],
    void,
    { dispatch: AppDispatch; rejectValue: string }
>('films/getFilmsSliderPopular', async (_, { dispatch, rejectWithValue }) => {
    try {
        const response = await request({
            url: `${process.env.REACT_APP_API_BASE_V1_4}movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=rating.imdb&notNullFields=ageRating&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=year&sortField=rating.imdb&sortType=-1&typeNumber=1&sortType=-1&lists=top250`,
            dispatch,
        });

        if (!response.docs?.length) {
            return rejectWithValue('Film not found');
        }

        return response.docs;
    } catch (e) {
        if (e instanceof Error) {
            return rejectWithValue(e.message);
        }

        return rejectWithValue('An unknown error occurred');
    }
});
