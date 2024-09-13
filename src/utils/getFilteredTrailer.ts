import { Video } from "../types/types";

export const getFilteredTrailer = (trailers: Video[]) => {
    let filteredTrailer = trailers.find((trailer) =>
        /[А-Яа-яЁё]/.test(trailer.name)
    );

    if (!filteredTrailer) {
        filteredTrailer =
            trailers.find(
                (trailer) =>
                    trailer.name.toLowerCase().includes('official trailer') &&
                    !/\d/.test(trailer.name)
            ) ||
            trailers.find((trailer) =>
                trailer.name.toLowerCase().includes('official trailer')
            );
    }

    return filteredTrailer || trailers[0];
};
