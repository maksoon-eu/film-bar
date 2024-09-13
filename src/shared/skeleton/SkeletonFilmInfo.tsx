import styles from './skeleton.module.scss';

const SkeletonFilmInfo = () => {
    return (
        <>
            <div
                className={`${styles.skeletonTitle} ${styles.skeletonTitle__choose} ${styles.skeleton}`}>
                <div className={styles.skeletonWave} />
            </div>
            <div className={`${styles.skeletonInfo} ${styles.skeleton}`}>
                <div className={styles.skeletonInfo__item}>
                    <div className={styles.skeletonWave} />
                </div>
                <div className={styles.skeletonInfo__item}>
                    <div className={styles.skeletonWave} />
                </div>
            </div>
        </>
    );
};

export default SkeletonFilmInfo;
