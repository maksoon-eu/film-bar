import { ITrailers } from '../store/features/featureTrailers/featureTrailersType';

export const getFilteredTrailer = (trailers: ITrailers) => {
    let filteredTrailer = trailers.videos.trailers.find((trailer) =>
        /[А-Яа-яЁё]/.test(trailer.name)
    );

    if (!filteredTrailer) {
        filteredTrailer =
            trailers.videos.trailers.find(
                (trailer) =>
                    trailer.name.toLowerCase().includes('official trailer') &&
                    !/\d/.test(trailer.name)
            ) ||
            trailers.videos.trailers.find((trailer) =>
                trailer.name.toLowerCase().includes('official trailer')
            );
    }

    return filteredTrailer || trailers.videos.trailers[0];
};
