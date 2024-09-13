import styles from './skeleton.module.scss';

const SkeletonFilmPlayer = () => {
    return (
        <div className={`${styles.skeletonPlayer} ${styles.skeleton}`}>
            <div className={styles.skeletonWave} />
        </div>
    );
};

export default SkeletonFilmPlayer;
