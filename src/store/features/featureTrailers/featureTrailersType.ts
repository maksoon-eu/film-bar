import { LoadingStatusType, Poster } from '../../types/types';

interface Video {
    url: string;
    name: string;
    site: string;
    type: string;
}

interface Videos {
    trailers: Video[];
}

export interface ITrailers {
    id: number;
    name: string;
    poster: Poster;
    backdrop: Poster;
    videos: Videos;
}

export interface ITrailersSlice {
    trailers: ITrailers[] | [];
    loadingStatus: LoadingStatusType;
}
