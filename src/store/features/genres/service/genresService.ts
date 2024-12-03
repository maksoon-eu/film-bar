import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../../utils/api/api';
import { IGenre } from '../types/featureGenresTypes';
import { AppDispatch } from '../../../config/StateSchema';

export const getGenres = createAsyncThunk<
    IGenre[],
    void,
    { dispatch: AppDispatch; rejectValue: string }
>('genres/getGenres', async (_, { dispatch, rejectWithValue }) => {
    try {
        let response;
        if (process.env.NODE_ENV === 'development') {
            response = await request({
                url: `${process.env.REACT_APP_TEST_API_BASE}allGenres`,
                dispatch,
            });
        } else {
            response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1}movie/possible-values-by-field?field=genres.name`,
                dispatch,
            });
        }

        if (!response?.length) {
            return rejectWithValue('Incorrect response');
        }

        return response;
    } catch (e) {
        if (e instanceof Error) {
            return rejectWithValue(e.message);
        }

        return rejectWithValue('An unknown error occurred');
    }
});
