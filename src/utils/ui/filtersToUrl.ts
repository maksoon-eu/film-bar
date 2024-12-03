import { IFilters } from '../../store/features/filmsCatalog/types/featureFilmsCatalogTypes';

export const filtersToUrl = (filters: IFilters) => {
    return Object.entries(filters)
        .flatMap(([key, values]) => {
            return values.map((value) => `${key}=${value}`);
        })
        .join('&');
};
