import { LoadingStatusType } from "../../../../types/types";
import { IFilms } from "../../films/types/featureFilmsTypes";

export interface IFilmsCatalogSlice {
    filmsCatalog: IFilms[];
    page: number;
    loadingStatus: LoadingStatusType;
}
