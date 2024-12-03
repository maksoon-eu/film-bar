import { LoadingStatusType } from '../../../../types/types';

export interface IGenre {
    name: string;
    slug: string;
}

export interface IGenresSlice {
    genres: IGenre[] | [];
    loadingStatus: LoadingStatusType;
}
