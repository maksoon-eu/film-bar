import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../../utils/api/api';
import { ITrailers } from '../types/featureTrailersType';
import { AppDispatch } from '../../../config/StateSchema';

export const getTrailers = createAsyncThunk<
    ITrailers[],
    void,
    { dispatch: AppDispatch; rejectValue: string }
>('trailers/gerTrailers', async (_, { dispatch, rejectWithValue }) => {
    try {
        let response;
        if (process.env.NODE_ENV === 'development') {
            response = await request({
                url: `${process.env.REACT_APP_TEST_API_BASE}trailers`,
                dispatch,
            });
        } else {
            response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1_4}movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=rating&selectFields=poster&selectFields=videos&selectFields=backdrop&notNullFields=id&notNullFields=name&notNullFields=rating.kp&notNullFields=poster.url&notNullFields=videos.trailers.url&sortField=rating.kp&sortType=-1&year=2024`,
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
