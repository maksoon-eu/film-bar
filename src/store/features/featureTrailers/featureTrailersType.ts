import { LoadingStatusType } from '../../types/types';

interface Poster {
    url: string;
    previewUrl?: string;
}

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
    videos: Videos;
}

export interface ITrailersSlice {
    trailers: ITrailers[] | [];
    loadingStatus: LoadingStatusType;
}
