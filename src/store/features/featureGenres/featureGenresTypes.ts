import { LoadingStatusType } from '../../types/types';

export interface IGenre {
    name: string;
    slug: string;
}

export interface IGenres {
    genres: IGenre[] | [];
    loadingStatus: LoadingStatusType;
}
