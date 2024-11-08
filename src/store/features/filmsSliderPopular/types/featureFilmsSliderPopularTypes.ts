import { LoadingStatusType } from '../../../../types/types';
import { IFilmSlider } from '../../filmsSliderNew/types/featureFilmsSliderNewTypes';

export interface IFilmsSliderPopularSlice {
    filmsSliderPopular: IFilmSlider[] | [];
    loadingStatus: LoadingStatusType;
}
