import { LoadingStatusType, Poster, Rating } from '../../types/types';

export interface IFilmsSearch {
    id: number;
    name: string;
    poster: Poster;
    rating: Rating;
    year: number;
}

export interface IFilmsSearchSlice {
    filmsSearch: IFilmsSearch[] | [];
    loadingStatus: LoadingStatusType;
}
