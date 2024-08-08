import { NameItem, Rating } from "../../types/types";

// External IDs
interface ExternalId {
    kpHD: string;
    imdb: string;
    tmdb: number;
}

// Names
interface Name {
    name: string;
    language: string;
    type: string;
}

// Fact
interface Fact {
    value: string;
    type: string;
    spoiler: boolean;
}

// Votes
interface Votes {
    kp: string;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

// Logo, Poster, and Backdrop
interface Image {
    url: string;
    previewUrl?: string;
}

// Video
interface Video {
    url: string;
    name: string;
    site: string;
    size: number;
    type: string;
}

// Genre and Country

// Person
interface Person {
    id: number;
    photo: string;
    name: string;
    enName: string;
    description: string;
    profession: string;
    enProfession: string;
}

// Review Info
interface ReviewInfo {
    count: number;
    positiveCount: number;
    percentage: string;
}

// Seasons Info
interface SeasonsInfo {
    number: number;
    episodesCount: number;
}

// Budget and Fees
interface Money {
    value: number;
    currency: string;
}

// Premiere
interface Premiere {
    country: string;
    world: string;
    russia: string;
    digital: string;
    cinema: string;
    bluray: string;
    dvd: string;
}

// Similar Movies and Sequels/Prequels
interface MovieSummary {
    id: number;
    name: string;
    enName: string;
    alternativeName: string;
    type: string;
    poster: Image;
    rating: Rating;
    year: number;
}

// Watchability
interface WatchabilityItem {
    name: string;
    logo: Image;
    url: string;
}

// Release Years
interface ReleaseYears {
    start: number;
    end: number;
}

// Audience
interface Audience {
    count: number;
    country: string;
}

// Network
interface NetworkItem {
    name: string;
    logo: Image;
}

// Main Document
export interface IFilm {
    id: number;
    externalId: ExternalId;
    name: string;
    alternativeName: string;
    enName: string;
    names: Name[];
    type: string;
    typeNumber: number;
    year: number;
    description: string;
    shortDescription: string;
    slogan: string;
    status: string;
    facts: Fact[];
    rating: Rating;
    votes: Votes;
    movieLength: number;
    ratingMpaa: string;
    ageRating: number;
    logo: Image;
    poster: Image;
    backdrop: Image;
    videos: {
        trailers: Video[];
    };
    genres: NameItem[];
    countries: NameItem[];
    persons: Person[];
    reviewInfo: ReviewInfo;
    seasonsInfo: SeasonsInfo[];
    budget: Money;
    fees: {
        world: Money;
        russia: Money;
        usa: Money;
    };
    premiere: Premiere;
    similarMovies: MovieSummary[];
    sequelsAndPrequels: MovieSummary[];
    watchability: {
        items: WatchabilityItem[];
    };
    releaseYears: ReleaseYears[];
    top10: number;
    top250: number;
    ticketsOnSale: boolean;
    totalSeriesLength: number;
    seriesLength: number;
    isSeries: boolean;
    audience: Audience[];
    lists: string[];
    networks: {
        items: NetworkItem[];
    };
    updatedAt: string;
    createdAt: string;
}
