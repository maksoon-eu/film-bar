import styles from './skeleton.module.scss';

const SkeletonTitle = () => {
    return (
        <div className={`${styles.skeletonTitle} ${styles.skeleton}`}>
            <div className={styles.skeletonWave} />
            <div className={styles.skeletonTitle__title} />
        </div>
    );
};

export default SkeletonTitle;
