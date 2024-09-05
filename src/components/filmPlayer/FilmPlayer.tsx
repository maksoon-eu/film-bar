import { useEffect } from 'react';
import { LoadingStatusType } from '../../types/types';

interface IFilmPlayer {
    filmId: number;
    backdropSrc: string | undefined;
    loadingStatus: LoadingStatusType;
}

const FilmPlayer = ({ filmId, backdropSrc, loadingStatus }: IFilmPlayer) => {
    useEffect(() => {
        if (filmId) {
            const script = document.createElement('script');
            script.src = 'https://kinobox.tv/kinobox.min.js';
            script.defer = true;

            script.onload = () => {
                const playerElement = document.querySelector('.kinobox_player');

                if (playerElement && window.Kinobox) {
                    new window.Kinobox('.kinobox_player', {
                        search: { kinopoisk: filmId },
                        params: { all: { poster: backdropSrc } },
                    }).init();
                }
            };

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [filmId]);

    if (loadingStatus === 'loading') {
        return <div>Loading...</div>;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <div className="kinobox_player" />;
};

export default FilmPlayer;
