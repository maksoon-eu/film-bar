import { Link } from 'react-router-dom';

import Button from '../../shared/button/Button';

import loader from '../../assets/loader/error-loader.svg';

import styles from './error.module.scss';

const Error = () => {
    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={styles.error}>
            <div className={styles.error__inner}>
                <div className={styles.error__inner_error}>
                    <div className={styles.error__inner_title}>Произошла непредвиденная ошибка</div>
                </div>
                <div className={styles.error__inner_btn}>
                    <Button>
                        <Link to={'/'}>
                            <div className={styles.error__inner_link}>
                                Вернуться на главную страницу
                            </div>
                        </Link>
                    </Button>
                    <Button>
                        <div className={styles.error__inner_img} onClick={reload}>
                            <img src={loader} alt="loader" />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Error;
