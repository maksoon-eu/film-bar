import styles from './skeleton.module.scss';

const SkeletonMainSlider = () => {
    return (
        <div className={`${styles.skeletonMainSlider} ${styles.skeleton}`}>
            <div className={styles.skeletonWave} />
            <div className={styles.skeletonMainSlider__fade} />
        </div>
    );
};

export default SkeletonMainSlider;
