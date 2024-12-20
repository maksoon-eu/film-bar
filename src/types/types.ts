export type LoadingStatusType = 'idle' | 'loading' | 'error' | 'update';

export interface Video {
    url: string;
    name: string;
    site: string;
    type: string;
}

export interface Poster {
    url: string;
    previewUrl?: string;
}

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

export type Path = 'genres' | 'countries';
