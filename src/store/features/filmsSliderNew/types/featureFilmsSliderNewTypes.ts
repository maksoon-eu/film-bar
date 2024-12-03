import { LoadingStatusType, Poster } from '../../../../types/types';
import { IFilmsSliderMain } from '../../filmsSliderMain/types/featureFilmsSliderMainTypes';

export interface IFilmSlider extends IFilmsSliderMain {
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
