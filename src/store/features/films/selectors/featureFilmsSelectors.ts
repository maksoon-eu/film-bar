import { StateSchema } from "../../../config/StateSchema";

export const selectFilms = (state: StateSchema) => state.films;
