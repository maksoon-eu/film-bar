import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactPlayer from 'react-player';
import loader from '../../assets/loader/loader.svg';
import { ITrailers } from '../../store/features/featureTrailers/featureTrailersType';
import { getFilteredTrailer } from '../../utils/getFilteredTrailer';

import styles from './trailersSliderItem.module.scss';

interface TrailerSliderItemProps {
    trailer: ITrailers;
}

const TrailersSliderItem = React.memo(({ trailer }: TrailerSliderItemProps) => {
    const trailerUrl = getFilteredTrailer(trailer);

    return (
        <div className={styles.trailersSliderItem__slide}>
            <div className={styles.trailersSliderItem__item}>
                <ReactPlayer
                    url={trailerUrl.url}
                    width="100%"
                    height="100%"
                    controls
                    light={
                        <LazyLoadImage
                            alt={trailer.name}
                            effect="opacity"
                            src={trailer.backdrop.url}
                            className={styles.trailersSliderItem__item_image}
                        />
                    }
                    className={styles.trailersSliderItem__item_reactPlayer}
                />
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
