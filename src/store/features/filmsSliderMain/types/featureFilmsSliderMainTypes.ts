import { LoadingStatusType, NameItem, Rating } from '../../../../types/types';

interface Image {
    url: string;
    previewUrl?: string;
}

export interface IFilmsSliderMain {
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

export interface IFilmsSliderMainSlice {
    films: IFilmsSliderMain[] | [];
    loadingStatus: LoadingStatusType;
}
