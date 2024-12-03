import { LoadingStatusType } from "../../../../types/types";

export interface ICountry {
    name: string;
    slug: string;
}

export interface ICountriesSlice {
    countries: ICountry[] | [];
    loadingStatus: LoadingStatusType;
}
