import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './features/featureMovies/featureMoviesSlice';
import { genresReducer } from './features/featureGenres/featureGenresSlice';

export const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
