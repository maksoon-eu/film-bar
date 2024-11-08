import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../../utils/api';
import { IFilmSlider } from '../../filmsSliderNew/types/featureFilmsSliderNewTypes';
import { AppDispatch } from '../../../config/StateSchema';

export const getSeries = createAsyncThunk<
    IFilmSlider[],
    void,
    { dispatch: AppDispatch; rejectValue: string }
>('series/getSeries', async (_, { dispatch, rejectWithValue }) => {
    try {
        const response = await request({
            url: `${process.env.REACT_APP_API_BASE_V1_4}movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=seasonsInfo&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=rating.imdb&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=ageRating&notNullFields=top250&sortField=year&sortField=rating.imdb&sortType=-1&sortType=-1&typeNumber=2`,
            dispatch,
        });

        if (!response.docs?.length) {
            return rejectWithValue('Incorrect response');
        }

        return response.docs;
    } catch (e) {
        if (e instanceof Error) {
            return rejectWithValue(e.message);
        }

        return rejectWithValue('An unknown error occurred');
    }
});
