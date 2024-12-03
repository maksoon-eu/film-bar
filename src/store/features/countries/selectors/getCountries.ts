import { StateSchema } from '../../../config/StateSchema';

export const selectCountries = (state: StateSchema) => state.countries;
