import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ITrailers } from '../../store/features/trailers/types/featureTrailersType';
import { getFilteredTrailer } from '../../utils/ui/getFilteredTrailer';

import loader from '../../assets/loader/loader.svg';

import styles from './trailersSliderItem.module.scss';
import TrailerPlayer from '../../shared/trailerPlayer/TrailerPlayer';

interface TrailerSliderItemProps {
    trailer: ITrailers;
}

const TrailersSliderItem = React.memo(({ trailer }: TrailerSliderItemProps) => {
    const trailerUrl = getFilteredTrailer(trailer.videos.trailers);

    return (
        <div className={styles.trailersSliderItem__slide}>
            <div className={styles.trailersSliderItem__item}>
                <TrailerPlayer trailerUrl={trailerUrl} />
                <div className={styles.trailersSliderItem__item_poster}>
                    <LazyLoadImage
                        alt={trailer.name}
                        effect="opacity"
                        src={trailer.poster.previewUrl || trailer.poster.url}
                    />
                </div>
                <div className={styles.trailersSliderItem__item_loader}>
                    <img src={loader} alt="" />
                </div>
            </div>
            <div className={styles.trailersSliderItem__item_name}>{trailer.name}</div>
        </div>
    );
});

export default TrailersSliderItem;
