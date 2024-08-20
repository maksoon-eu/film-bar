import { LoadingStatusType, Poster } from '../../types/types';
import { IFilm } from '../featureFilms/featureFilmsTypes';

export interface IFilmSlider extends IFilm {
    poster: Poster;
    year: number;
    movieLength?: number;
    seriesLength?: number;
}

export interface IFilmsSliderNewSlice {
    filmsSliderNew: IFilmSlider[] | [];
    loadingStatus: LoadingStatusType;
}
