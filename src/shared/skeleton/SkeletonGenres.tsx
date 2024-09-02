import styles from './skeleton.module.scss';

const SkeletonGenres = () => {
    return (
        <div className={`${styles.skeletonGenres} ${styles.skeleton} ${styles.skeleton__slider}`}>
            <div className={`${styles.skeletonGenres__item} ${styles.skeleton__item}`}>
                <div className={styles.skeletonWave} />
            </div>
            <div className={`${styles.skeletonGenres__item} ${styles.skeleton__item}`}>
                <div className={styles.skeletonWave} />
            </div>
            <div className={`${styles.skeletonGenres__item} ${styles.skeleton__item}`}>
                <div className={styles.skeletonWave} />
            </div>
            <div className={`${styles.skeletonGenres__item} ${styles.skeleton__item}`}>
                <div className={styles.skeletonWave} />
            </div>
            <div className={`${styles.skeletonGenres__item} ${styles.skeleton__item}`}>
                <div className={styles.skeletonWave} />
            </div>
        </div>
    );
};

export default SkeletonGenres;
