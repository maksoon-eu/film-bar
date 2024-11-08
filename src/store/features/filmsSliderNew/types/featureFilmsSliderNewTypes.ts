import { LoadingStatusType, Poster } from '../../../../types/types';
import { IFilms } from "../../films/types/featureFilmsTypes";

export interface IFilmSlider extends IFilms {
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
