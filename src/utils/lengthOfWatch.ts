import { IFilmSlider } from '../store/features/filmsSliderNew/types/featureFilmsSliderNewTypes';

const getSeasonLabel = (count: number) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'сезонов';
    }

    if (lastDigit === 1) {
        return 'сезон';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'сезона';
    }

    return 'сезонов';
};

export const lengthOfWatch = (item: IFilmSlider) => {
    let lengthResult;

    if ('movieLength' in item) {
        lengthResult = `${item.movieLength} мин`;
    } else if ('seasonsInfo' in item) {
        const seasonCount = item.seasonsInfo?.length;
        lengthResult = seasonCount ? `${seasonCount} ${getSeasonLabel(seasonCount)}` : undefined;
    }
    return lengthResult || '...';
};
