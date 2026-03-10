import { useEffect, useMemo, useState } from 'react';
import { LoadingStatusType } from '../../types/types';
import { AllohaData, fetchAllohaData } from '../../utils/api/allohaApi';

import SkeletonFilmPlayer from '../../shared/skeleton/SkeletonFilmPlayer';

import styles from './filmPlayer.module.scss';

interface IFilmPlayer {
    filmId: string;
    backdropSrc: string | undefined;
    loadingStatus: LoadingStatusType;
}

const FilmPlayer = ({ filmId, loadingStatus }: IFilmPlayer): JSX.Element | null => {
    const [allohaData, setAllohaData] = useState<AllohaData | null>(null);
    const [playerFilmId, setPlayerFilmId] = useState<string | undefined>(undefined);
    const [playerLoading, setPlayerLoading] = useState(false);
    const [season, setSeason] = useState(1);
    const [episode, setEpisode] = useState(1);

    useEffect(() => {
        if (!filmId) return;

        setAllohaData(null);
        setPlayerFilmId(undefined);
        setPlayerLoading(true);

        fetchAllohaData(filmId)
            .then((data) => {
                setAllohaData(data);
                setPlayerFilmId(filmId);

                if (data?.seasons) {
                    const firstSeason = Math.min(...Object.keys(data.seasons).map(Number));
                    const firstEpisode = Math.min(
                        ...Object.keys(data.seasons[firstSeason].episodes).map(Number)
                    );
                    setSeason(firstSeason);
                    setEpisode(firstEpisode);
                }
            })
            .catch(() => setPlayerFilmId(filmId))
            .finally(() => setPlayerLoading(false));
    }, [filmId]);

    const isSeries = !!allohaData?.seasons;

    const availableSeasons = useMemo(
        () =>
            allohaData?.seasons
                ? Object.keys(allohaData.seasons)
                      .map(Number)
                      .sort((a, b) => a - b)
                : [],
        [allohaData]
    );

    const availableEpisodes = useMemo(
        () =>
            allohaData?.seasons?.[season]
                ? Object.keys(allohaData.seasons[season].episodes)
                      .map(Number)
                      .sort((a, b) => a - b)
                : [],
        [allohaData, season]
    );

    const playerSrc = isSeries
        ? (allohaData?.seasons?.[season]?.episodes?.[episode]?.iframe ?? null)
        : (allohaData?.iframe ?? null);

    const handleSeasonChange = (s: number): void => {
        setSeason(s);
        const firstEpisode = allohaData?.seasons?.[s]
            ? Math.min(...Object.keys(allohaData.seasons[s].episodes).map(Number))
            : 1;
        setEpisode(firstEpisode);
    };

    if (loadingStatus === 'loading' || playerLoading || playerFilmId !== filmId) {
        return <SkeletonFilmPlayer />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    if (!playerSrc) {
        return null;
    }

    return (
        <div className={styles.filmPlayer}>
            {isSeries && (
                <div className={styles.filmPlayer__controls}>
                    <div className={styles.filmPlayer__seasons}>
                        {availableSeasons.map((s) => (
                            <button
                                key={s}
                                className={`${styles.filmPlayer__btn} ${season === s ? styles['filmPlayer__btn--active'] : ''}`}
                                onClick={() => handleSeasonChange(s)}
                            >
                                {s} сезон
                            </button>
                        ))}
                    </div>
                    <div className={styles.filmPlayer__episodes}>
                        {availableEpisodes.map((e) => (
                            <button
                                key={e}
                                className={`${styles.filmPlayer__btn} ${episode === e ? styles['filmPlayer__btn--active'] : ''}`}
                                onClick={() => setEpisode(e)}
                            >
                                {e}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            <div className={styles.filmPlayer__iframe}>
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
        </div>
    );
};

export default FilmPlayer;
