import { AppDispatch } from '../../../config/StateSchema';
import { ICountry } from '../types/featureCountriesType';
import { request } from '../../../../utils/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCountries = createAsyncThunk<
    ICountry[],
    void,
    { dispatch: AppDispatch; rejectValue: string }
>('countries/getCountries', async (_, { dispatch, rejectWithValue }) => {
    try {
        let response;

        if (process.env.NODE_ENV === 'development') {
            response = await request({
                url: `${process.env.REACT_APP_TEST_API_BASE}countries`,
                dispatch,
            });
        } else {
            response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1}movie/possible-values-by-field?field=countries.name`,
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
