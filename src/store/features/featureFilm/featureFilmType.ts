import { LoadingStatusType } from '../../../types/types';

export interface IFilm {
    id: string;
    name?: string;
    alternativeName?: string;
    enName?: string;
    year?: number;
    description?: string;
    status?: string;
    rating?: {
        kp: number;
        imdb: number;
        tmdb: number;
        filmCritics: number;
        russianFilmCritics: number;
        await: number;
    };
    typeNumber: number;
    movieLength?: number;
    ageRating: number;
    logo?: {
        url: string;
    };
    poster?: {
        url: string;
        previewUrl: string;
    };
    backdrop?: {
        url: string;
        previewUrl: string;
    };
    videos?: {
        trailers?: {
            url: string;
            name: string;
            site: string;
            size: number;
            type: string;
        }[];
    };
    genres?: {
        name: string;
    }[];
    countries?: {
        name: string;
    }[];
    persons?: {
        id: number;
        photo: string;
        name: string;
        enName: string;
        description: string;
        profession: string;
        enProfession: string;
    }[];
    budget?: {
        value: number;
        currency: string;
    };
    fees?: {
        world?: {
            value: number;
            currency: string;
        };
        russia: {
            value: number;
            currency: string;
        };
        usa: {
            value: number;
            currency: string;
        };
    };
    premiere?: {
        country: string;
        world: string;
        russia: string;
        digital: string;
        cinema: string;
        bluray: string;
        dvd: string;
    };
    sequelsAndPrequels?: {
        id: number;
        name?: string;
        enName?: string;
        alternativeName?: string;
        type: string;
        poster?: {
            url: string;
            previewUrl: string;
        };
        rating?: {
            kp: number;
            imdb: number;
            tmdb: number;
            filmCritics: number;
            russianFilmCritics: number;
            await: number;
        };
        year?: number;
    }[];
    top10: number;
    top250: number;
    updatedAt: string;
    createdAt: string;
}

export interface IFilmSlice {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}
