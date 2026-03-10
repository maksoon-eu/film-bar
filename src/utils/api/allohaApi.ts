const ALLOHA_TOKEN = process.env.REACT_APP_ALLOHA_TOKEN;

export const fetchAllohaPlayerSrc = (filmId: string): Promise<string | null> =>
    fetch(`https://api.alloha.tv/?token=${ALLOHA_TOKEN}&kp=${filmId}`)
        .then((res) => res.json())
        .then((data) => (data?.data?.iframe as string) ?? null)
        .catch(() => null);
