import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFilmsSliderMain } from '../types/featureFilmsSliderMainTypes';
import { request } from '../../../../utils/api/api';
import { AppDispatch } from '../../../config/StateSchema';

export const getFilmsSliderMain = createAsyncThunk<
    IFilmsSliderMain[],
    void,
    { dispatch: AppDispatch; rejectValue: string }
>('films/getFilmsSliderMain', async (_, { dispatch, rejectWithValue }) => {
    try {
        let response;
        if (process.env.NODE_ENV === 'development') {
            response = await request({
                url: `${process.env.REACT_APP_TEST_API_BASE}films`,
                dispatch,
            });
        } else {
            response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1_4}movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=description&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=countries&selectFields=backdrop&selectFields=logo&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=rating.imdb&notNullFields=ageRating&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=backdrop.url&notNullFields=logo.url&notNullFields=top250&sortField=externalId.imdb&sortType=-1`,
                dispatch,
            });
        }

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
