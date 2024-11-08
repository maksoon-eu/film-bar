import { LoadingStatusType } from "../../../../types/types";
import { IFilmSlider } from "../../filmsSliderNew/types/featureFilmsSliderNewTypes";

export interface ISeriesSlice {
    series: IFilmSlider[] | [];
    loadingStatus: LoadingStatusType;
}
