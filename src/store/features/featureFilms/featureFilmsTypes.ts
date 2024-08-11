import { LoadingStatusType, NameItem, Rating } from '../../types/types';

interface Image {
    url: string;
    previewUrl?: string;
}

export interface IFilm {
    rating: Rating;
    backdrop: Image;
    id: number;
    name: string;
    description: string;
    genres: NameItem[];
    countries: NameItem[];
    ageRating: number;
    logo: Image;
}

export interface IFilmsSlice {
    films: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}
