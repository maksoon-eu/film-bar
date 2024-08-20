import { LoadingStatusType, Poster } from '../../types/types';
import { IFilmSlider } from "../featureFilmsSliderNew/featureFilmsSliderNewTypes";

export interface ISeriesSlice {
    series: IFilmSlider[] | [];
    loadingStatus: LoadingStatusType;
}
