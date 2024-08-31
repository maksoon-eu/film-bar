import { LoadingStatusType, NameItem, Poster, Rating } from '../../types/types';

export interface IFilmsSearch {
    id: number;
    name: string;
    poster: Poster;
    rating: Rating;
    year: number;
    genres: NameItem[];
    countries: NameItem[];
    enName: string;
}

export interface IFilmsSearchSlice {
    filmsSearch: IFilmsSearch[] | [];
    loadingStatus: LoadingStatusType;
}
