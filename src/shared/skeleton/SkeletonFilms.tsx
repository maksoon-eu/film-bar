import styles from './skeleton.module.scss';

interface SkeletonFilmsProps {
    count: number;
}

const SkeletonFilms = ({ count }: SkeletonFilmsProps) => {
    const skeletonList = Array.from({ length: count }).map((_, i) => {
        return (
            <div key={i} className={styles.skeleton__colum}>
                <div className={`${styles.skeletonFilms__item} ${styles.skeleton__item}`}>
                    <div className={styles.skeletonWave} />
                </div>
                <div className={styles.skeleton__item_name}>
                    <div className={styles.skeletonWave} />
                </div>
            </div>
        );
    });
    return <>{skeletonList}</>;
};

export default SkeletonFilms;
