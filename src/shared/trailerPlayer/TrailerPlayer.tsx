import { Video } from '../../types/types';

import styles from './trailerPlayer.module.scss';

interface ITrailerPlayer {
    trailerUrl: Video;
}

const TrailerPlayer = ({ trailerUrl }: ITrailerPlayer) => {
    return (
        <iframe
            src={`${trailerUrl.url}?&controls=1`}
            width="100%"
            height="100%"
            allowFullScreen
            className={styles.trailerPlayer}
        />
    );
};

export default TrailerPlayer;
