import styles from './actorsSliderItem.module.scss';

interface IActorsSliderItem {
    name: string;
    photoSrc: string;
}

const ActorsSliderItem = ({ name, photoSrc }: IActorsSliderItem) => {
    return (
        <div className={styles.actorsSliderItem}>
            <div className={styles.actorsSliderItem__inner}>
                <div className={styles.actorsSliderItem__img}>
                    <img src={photoSrc} alt="" />
                </div>
                <div className={styles.actorsSliderItem__name}>{name}</div>
            </div>
        </div>
    );
};

export default ActorsSliderItem;
