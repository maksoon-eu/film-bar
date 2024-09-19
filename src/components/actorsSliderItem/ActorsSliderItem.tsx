import { LazyLoadImage } from "react-lazy-load-image-component";

import loader from '../../assets/loader/loader.svg';

import styles from './actorsSliderItem.module.scss';

interface IActorsSliderItem {
    name: string;
    photoSrc: string;
}

const ActorsSliderItem = ({ name, photoSrc }: IActorsSliderItem) => {
    return (
        <div className={styles.actorsSliderItem}>
            <div className={styles.actorsSliderItem__inner}>
                <div className={styles.actorsSliderItem__img}>
                    <LazyLoadImage
                        alt={name}
                        src={photoSrc}
                        effect="blur"
                        width={'100%'}
                        height={'100%'}
                        placeholderSrc={loader}
                    />
                </div>
                <div className={styles.actorsSliderItem__name}>{name}</div>
            </div>
        </div>
    );
};

export default ActorsSliderItem;
