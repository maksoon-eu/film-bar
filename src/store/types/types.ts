export type LoadingStatusType = 'idle' | 'loading' | 'error';

export interface Rating {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

export interface NameItem {
    name: string;
}