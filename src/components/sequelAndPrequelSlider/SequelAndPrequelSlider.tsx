import { LoadingStatusType } from '../../types/types';
import { IFilm } from '../../store/features/featureFilm/featureFilmType';
import { useMemo } from 'react';
import { sliderSettingsAssets } from '../../settings/sliderSettings';

import Slider from 'react-slick';
import SequelAndPrequelSliderItem from '../sequelAndPrequelSliderItem/SequelAndPrequelSliderItem';
import SkeletonFilmsSlider from '../../shared/skeleton/SkeletonFilmsSlider';
import ConditionalComponent from "../../shared/conditionalComponent/ConditionalComponent";

import styles from './sequelAndPrequelSlider.module.scss';

interface ISequelAndPrequelSlider {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}

const SequelAndPrequelSlider = ({ film, loadingStatus }: ISequelAndPrequelSlider) => {
    const sequelAndPrequelSliderList = useMemo(
        () =>
            film[0]?.sequelsAndPrequels?.map((item) => {
                return <SequelAndPrequelSliderItem key={item.id} film={item} />;
            }),
        [film]
    );

    const sequelAndPrequelList = useMemo(
        () => (
            <ConditionalComponent value={sequelAndPrequelSliderList}>
                <div className={styles.sequelAndPrequelSlider}>
                    <div className="title">Сиквелы и приквелы</div>
                    <Slider {...sliderSettingsAssets}>{sequelAndPrequelSliderList}</Slider>
                </div>
            </ConditionalComponent>
        ),
        [film]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonFilmsSlider />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <>{sequelAndPrequelList}</>;
};

export default SequelAndPrequelSlider;
