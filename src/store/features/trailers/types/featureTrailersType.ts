import { LoadingStatusType, Poster, Video } from "../../../../types/types";

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
