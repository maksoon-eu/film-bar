import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './features/featureFilms/featureFilmsSlice';
import { genresReducer } from './features/featureGenres/featureGenresSlice';
import { trailersReducer } from './features/featureTrailers/featureTrailersSlice';

export const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer,
        trailersReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
