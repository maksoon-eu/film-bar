import styles from './skeletonMainSlider.module.scss';

const SkeletonMainSlider = () => {
    return (
        <div className={`${styles.skeletonMainSlider} ${styles.skeleton} ${styles.skeletonWave}`}>
            <div className={styles.skeletonWave} />
            <div className={styles.skeletonMainSlider__fade} />
        </div>
    );
};

export default SkeletonMainSlider;
