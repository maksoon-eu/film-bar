import SkeletonFilms from './SkeletonFilms';
import SkeletonTitle from './SkeletonTitle';

import styles from './skeleton.module.scss';

interface SkeletonFilmsSliderProps {
    count: number;
}

const SkeletonFilmsSlider = ({ count }: SkeletonFilmsSliderProps) => {
    return (
        <>
            <SkeletonTitle />
            <div
                className={`${styles.skeletonFilms} ${styles.skeleton} ${styles.skeleton__slider}`}>
                <SkeletonFilms count={count} />
            </div>
        </>
    );
};

export default SkeletonFilmsSlider;
