import { LoadingStatusType } from '../../types/types';

import SkeletonFilmPlayer from '../../shared/skeleton/SkeletonFilmPlayer';

import styles from './filmPlayer.module.scss';

interface IFilmPlayer {
    filmId: string;
    backdropSrc: string | undefined;
    loadingStatus: LoadingStatusType;
}

const FilmPlayer = ({ filmId, loadingStatus }: IFilmPlayer): JSX.Element | null => {
    if (loadingStatus === 'loading') {
        return <SkeletonFilmPlayer />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    if (!filmId) {
        return null;
    }

    const src = `https://api.alloha.tv/?token=${process.env.REACT_APP_ALLOHA_TOKEN}&kp=${filmId}`;

    return (
        <div className={styles.filmPlayer}>
            <iframe
                title="Film Player"
                src={src}
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
