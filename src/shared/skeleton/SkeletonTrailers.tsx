import styles from './skeleton.module.scss';

const SkeletonTrailers = () => {
    return (
        <div className={`${styles.skeletonTrailers} ${styles.skeleton} ${styles.skeleton__slider}`}>
            <div className={styles.skeleton__colum}>
                <div className={`${styles.skeletonTrailers__item} ${styles.skeleton__item}`}>
                    <div className={styles.skeletonWave} />
                </div>
                <div className={styles.skeleton__item_name}>
                    <div className={styles.skeletonWave} />
                </div>
            </div>
            <div className={styles.skeleton__colum}>
                <div className={`${styles.skeletonTrailers__item} ${styles.skeleton__item}`}>
                    <div className={styles.skeletonWave} />
                </div>
                <div className={styles.skeleton__item_name}>
                    <div className={styles.skeletonWave} />
                </div>
            </div>
            <div className={styles.skeleton__colum}>
                <div className={`${styles.skeletonTrailers__item} ${styles.skeleton__item}`}>
                    <div className={styles.skeletonWave} />
                </div>
                <div className={styles.skeleton__item_name}>
                    <div className={styles.skeletonWave} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonTrailers;
