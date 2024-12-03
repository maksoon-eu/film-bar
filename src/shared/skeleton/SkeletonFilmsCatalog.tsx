import SkeletonFilms from './SkeletonFilms';

import styles from './skeleton.module.scss';

interface SkeletonFilmsCatalogProps {
    count: number;
}

const SkeletonFilmsCatalog = ({ count }: SkeletonFilmsCatalogProps) => {
    return (
        <div className={`${styles.skeletonFilms} ${styles.skeleton} ${styles.skeleton__slider} ${styles.skeletonFilmsCatalog} content__page content__page--max`}>
            <SkeletonFilms count={count} />
        </div>
    );
};

export default SkeletonFilmsCatalog;
