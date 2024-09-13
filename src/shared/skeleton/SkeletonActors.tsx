import styles from './skeleton.module.scss';

const SkeletonActors = () => {
    return (
        <div className={`${styles.skeletonActors} ${styles.skeleton} ${styles.skeleton__slider}`}>
            <div className={styles.skeletonActors__item}>
                <div className={styles.skeletonWave} />
            </div>
            <div className={styles.skeletonActors__item}>
                <div className={styles.skeletonWave} />
            </div>
            <div className={styles.skeletonActors__item}>
                <div className={styles.skeletonWave} />
            </div>
            <div className={styles.skeletonActors__item}>
                <div className={styles.skeletonWave} />
            </div>
        </div>
    );
};

export default SkeletonActors;
