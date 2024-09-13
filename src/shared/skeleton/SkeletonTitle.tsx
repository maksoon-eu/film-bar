import styles from './skeleton.module.scss';

const SkeletonTitle = () => {
    return (
        <div className={`${styles.skeletonTitle} ${styles.skeleton}`}>
            <div className={styles.skeletonWave} />
        </div>
    );
};

export default SkeletonTitle;
