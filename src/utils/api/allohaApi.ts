const ALLOHA_TOKEN = process.env.REACT_APP_ALLOHA_TOKEN;

export interface AllohaEpisode {
    iframe: string;
    episode: number;
}

export interface AllohaSeason {
    iframe: string;
    season: number;
    episodes: Record<string, AllohaEpisode>;
}

export interface AllohaData {
    category: number;
    seasons_count?: number;
    seasons?: Record<string, AllohaSeason>;
    iframe?: string | null;
}

export const fetchAllohaData = (filmId: string): Promise<AllohaData | null> =>
    fetch(`https://api.alloha.tv/?token=${ALLOHA_TOKEN}&kp=${filmId}`)
        .then((res) => res.json())
        .then((json) => (json?.status === 'success' ? (json.data as AllohaData) : null))
        .catch(() => null);
