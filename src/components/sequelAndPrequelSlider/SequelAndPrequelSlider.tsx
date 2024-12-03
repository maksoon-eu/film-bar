import { IFilm } from '../../store/features/film/types/featureFilmType';
import { sliderSettingsAssets } from '../../settings/sliderSettings';
import { LoadingStatusType } from '../../types/types';
import { useMemo } from 'react';

import SequelAndPrequelSliderItem from '../sequelAndPrequelSliderItem/SequelAndPrequelSliderItem';
import SkeletonFilmsSlider from '../../shared/skeleton/SkeletonFilmsSlider';
import Slider from 'react-slick';

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

    const settings = {
        ...sliderSettingsAssets,
        slidesToShow:
            (sequelAndPrequelSliderList?.length ?? 0) > 4 ? 4 : sequelAndPrequelSliderList?.length,
    };

    const sequelAndPrequelList = useMemo(
        () => (
            <>
                {sequelAndPrequelSliderList?.length === 1 ? (
                    <div
                        className={`${styles.sequelAndPrequelSlider} ${styles.sequelAndPrequelSlider__one}`}>
                        <div className="title">Сиквелы и приквелы</div>
                        {sequelAndPrequelSliderList}
                    </div>
                ) : sequelAndPrequelSliderList?.length ? (
                    <div className={styles.sequelAndPrequelSlider}>
                        <div className="title">Сиквелы и приквелы</div>
                        <Slider {...settings}>{sequelAndPrequelSliderList}</Slider>
                    </div>
                ) : null}
            </>
        ),
        [film]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonFilmsSlider count={4} />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <>{sequelAndPrequelList}</>;
};

export default SequelAndPrequelSlider;
