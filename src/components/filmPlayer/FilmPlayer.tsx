import { useEffect } from 'react';
import { LoadingStatusType } from '../../types/types';

import SkeletonFilmPlayer from '../../shared/skeleton/SkeletonFilmPlayer';

import styles from './filmPlayer.module.scss';

interface IFilmPlayer {
    filmId: string;
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
    }, [filmId, backdropSrc]);

    if (loadingStatus === 'loading') {
        return <SkeletonFilmPlayer />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return (
        <div className={styles.filmPlayer}>
            <div className="kinobox_player" />
        </div>
    );
};

export default FilmPlayer;
