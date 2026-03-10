import { useEffect, useState } from 'react';
import { LoadingStatusType } from '../../types/types';
import { fetchAllohaPlayerSrc } from '../../utils/api/allohaApi';

import SkeletonFilmPlayer from '../../shared/skeleton/SkeletonFilmPlayer';

import styles from './filmPlayer.module.scss';

interface IFilmPlayer {
    filmId: string;
    backdropSrc: string | undefined;
    loadingStatus: LoadingStatusType;
}

const FilmPlayer = ({ filmId, loadingStatus }: IFilmPlayer): JSX.Element | null => {
    const [playerSrc, setPlayerSrc] = useState<string | null>(null);
    const [playerLoading, setPlayerLoading] = useState(false);

    useEffect(() => {
        if (!filmId) return;

        setPlayerSrc(null);
        setPlayerLoading(true);

        fetchAllohaPlayerSrc(filmId)
            .then(setPlayerSrc)
            .finally(() => setPlayerLoading(false));
    }, [filmId]);

    if (loadingStatus === 'loading' || playerLoading) {
        return <SkeletonFilmPlayer />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    if (!playerSrc) {
        return null;
    }

    return (
        <div className={styles.filmPlayer}>
            <iframe
                title="Film Player"
                src={playerSrc}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                allow="autoplay; fullscreen"
            />
        </div>
    );
};

export default FilmPlayer;
