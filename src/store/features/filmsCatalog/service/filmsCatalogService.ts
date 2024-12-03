import { IFilmSlider } from '../../filmsSliderNew/types/featureFilmsSliderNewTypes';
import { AppDispatch, StateSchema } from '../../../config/StateSchema';
import { request } from '../../../../utils/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { filtersToUrl } from "../../../../utils/ui/filtersToUrl";

export const getFilmsCatalog = createAsyncThunk<
    IFilmSlider[],
    void,
    { dispatch: AppDispatch; rejectValue: string; state: StateSchema }
>('films/getFilmsCatalog', async (_, { dispatch, rejectWithValue, getState }) => {
    try {
        const { filmsCatalog } = getState();

        const transformedFilters = filtersToUrl(filmsCatalog.filters)

        let response;
        if (process.env.NODE_ENV === 'development') {
            response = await request({
                url: `${process.env.REACT_APP_TEST_API_BASE}filmsCatalog`,
                dispatch,
            });
        } else {
            response = await request({
                url: `${process.env.REACT_APP_API_BASE_V1_4}page=${filmsCatalog.page}&limit=12&${transformedFilters}&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=rating.imdb&notNullFields=ageRating&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url`,
                dispatch,
            });
        }

        if (!response.docs) {
            return rejectWithValue('Incorrect response');
        }

        return response.docs;
    } catch (e) {
        if (e instanceof Error) {
            return rejectWithValue(e.message);
        }
    }
});
