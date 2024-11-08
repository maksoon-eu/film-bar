import { StateSchema } from '../../../config/StateSchema';

export const selectFilmsSearchLoading = (state: StateSchema) =>
    state?.filmsSearch?.loadingStatus || 'idle';
