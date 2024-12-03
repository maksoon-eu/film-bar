import { IFilmSlider } from '../../filmsSliderNew/types/featureFilmsSliderNewTypes';
import { LoadingStatusType } from '../../../../types/types';

export type FiltersVariant = 'countries' | 'genres' | 'year' | 'rating';

export interface IFilters {
    [key: string]: string[];
}

export interface IFilmsCatalogSlice {
    filmsCatalog: IFilmSlider[];
    page: number;
    filters: IFilters;
    loadingStatus: LoadingStatusType;
}
