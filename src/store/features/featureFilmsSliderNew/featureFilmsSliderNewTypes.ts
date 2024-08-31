import { LoadingStatusType, Poster } from '../../types/types';
import { IFilm } from '../featureFilms/featureFilmsTypes';

export interface IFilmSlider extends IFilm {
    poster: Poster;
    year: number;
    movieLength?: number;
    seasonsInfo?: [
        {
            number: number;
            episodesCount: number;
        }
    ];
}

export interface IFilmsSliderNewSlice {
    filmsSliderNew: IFilmSlider[] | [];
    loadingStatus: LoadingStatusType;
}
