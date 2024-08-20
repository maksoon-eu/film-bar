import styles from './ratingItem.module.scss';

interface RatingItemProps<K extends string> {
    rating: { name: K; value: number };
}

const RatingItem = <K extends string>({ rating }: RatingItemProps<K>) => {
    return (
        <div className={`${styles.ratingItem__item} ${styles[`ratingItem__${rating.name}`]}`}>
            <span className={styles.ratingItem__item_name}>{rating.name.toUpperCase()}:</span>{' '}
            {rating.value.toFixed(1)}
        </div>
    );
};

export default RatingItem;
