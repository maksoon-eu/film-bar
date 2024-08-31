import loader from '../../assets/loader/loader.svg';

import styles from './loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt="loader" />
        </div>
    );
};

export default Loader;
