import { IFilm } from '../../store/features/film/types/featureFilmType';
import { LoadingStatusType } from '../../types/types';
import { useMemo } from 'react';
import { sliderSettingsAssets, sliderSettingsAsync } from '../../settings/sliderSettings';

import Slider from 'react-slick';
import ActorsSliderItem from '../actorsSliderItem/ActorsSliderItem';
import SkeletonActorsSlider from '../../shared/skeleton/SkeletonActorsSlider';

import styles from './actorsSlider.module.scss';

interface IActorsSlider {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}

const ActorsSlider = ({ film, loadingStatus }: IActorsSlider) => {
    const actorSliderList = useMemo(
        () =>
            film[0]?.persons?.map((person) => (
                <div key={person.id}>
                    <ActorsSliderItem name={person.name || person.enName} photoSrc={person.photo} />
                </div>
            )),
        [film]
    );

    const actorsList = useMemo(
        () => (
            <>
                {actorSliderList && actorSliderList.length && (
                    <div className={styles.actorsSlider}>
                        <div className="title">Актеры</div>
                        <Slider {...{ ...sliderSettingsAssets, ...sliderSettingsAsync}}>
                            {actorSliderList}
                        </Slider>
                    </div>
                )}
            </>
        ),
        [film]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonActorsSlider />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <>{actorsList}</>;
};

export default ActorsSlider;
