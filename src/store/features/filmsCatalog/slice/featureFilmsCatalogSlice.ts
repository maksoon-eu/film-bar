import { IFilmsCatalogSlice, IFilters } from '../types/featureFilmsCatalogTypes';
import { getFilmsSliderNew } from '../../filmsSliderNew/service/filmsSliderNewService';
import { getFilmsCatalog } from '../service/filmsCatalogService';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilmsCatalogSlice = {
    filmsCatalog: [],
    filters: {
        'countries': [],
        'genres': [],
        'year': [],
        'rating': [],
    },
    page: 1,
    loadingStatus: 'idle',
};

const filmsCatalogSlice = createSlice({
    name: 'featuresFilmsCatalog',
    initialState,
    reducers: {
        updatePage: (state) => {
            state.page++;
        },
        changeFilter: (state, filter: PayloadAction<IFilters>) => {
            const filterField = Object.keys(filter.payload)[0];
            const filterValue = filter.payload[filterField][0];

            if (state.filters[filterField].includes(filterValue)) {
                state.filters[filterField] = state.filters[filterField].filter(
                    (filter) => filter !== filterValue
                );
            } else {
                state.filters[filterField] = [...state.filters[filterField], filterValue];
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsCatalog.pending, (state) => {
                if (state.page > 1) {
                    state.loadingStatus = 'update';
                } else {
                    state.loadingStatus = 'loading';
                }
            })
            .addCase(getFilmsCatalog.fulfilled, (state, action) => {
                if (state.page > 1) {
                    state.filmsCatalog = [...state.filmsCatalog, ...action.payload];
                } else {
                    state.filmsCatalog = action.payload;
                }

                state.loadingStatus = 'idle';
            })
            .addCase(getFilmsSliderNew.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

export const { reducer: filmsCatalogReducer } = filmsCatalogSlice;
export const { actions: filmsCatalogActions } = filmsCatalogSlice;
