import { RootState } from '../../store';

export const selectTrailers = (state: RootState) => state.trailersReducer;
