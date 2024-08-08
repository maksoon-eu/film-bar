import { LoadingStatusType } from "../../types/types";
import { IFilm } from '../featuresMovie/featuresMovieType';

export interface IFilms {
    films: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}
