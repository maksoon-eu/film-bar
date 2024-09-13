import styles from './skeleton.module.scss';

const SkeletonFilmPreview = () => {
    return (
        <div
            className={`${styles.skeletonTrailers} ${styles.skeletonPreview} ${styles.skeleton} ${styles.skeleton__trailer}`}>
            <div className={styles.skeletonTrailer__item}>
                <div className={`${styles.skeletonTrailers__trailer} ${styles.skeleton__item}`}>
                    <div className={styles.skeletonWave} />
                </div>
                <div className={styles.skeleton__item_name}>
                    <div className={styles.skeletonWave} />
                </div>
            </div>
            <div className={styles.skeletonRating}>
                <div className={styles.skeletonRating__item}>
                    <div className={styles.skeletonWave} />
                </div>
                <div className={styles.skeletonRating__item}>
                    <div className={styles.skeletonWave} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonFilmPreview;
