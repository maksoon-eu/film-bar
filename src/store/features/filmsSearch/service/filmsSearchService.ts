import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFilmsSearch } from '../types/featureFilmsSearchType';
import { request } from '../../../../utils/api';
import { AppDispatch } from '../../../config/StateSchema';

export const getFilmsSearch = createAsyncThunk<
    IFilmsSearch[],
    string,
    { dispatch: AppDispatch; rejectValue: string }
>('films/getFilmsSearch', async (filmName, { dispatch, rejectWithValue }) => {
    try {
        const response = await request({
            url: `${process.env.REACT_APP_API_BASE_V1_4}movie/search?page=1&limit=10&query=${filmName}`,
            dispatch,
        });

        if (!response.docs) {
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
