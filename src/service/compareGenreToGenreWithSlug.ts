import { IGenre } from '../store/features/featureGenres/featureGenresTypes';
import { NameItem } from '../store/types/types';

export const compareGenreToGenreWithSlug = (genresWithSlug: IGenre[], genres: NameItem[]) => {
    return genresWithSlug.filter(genreWithSlug => genres.some(genre => genreWithSlug.name === genre.name))
};
