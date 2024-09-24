import styles from './error.module.scss';

const ErrorForbidden = () => {
    return (
        <div className={styles.error}>
            <div className={styles.error__inner}>
                <div className={styles.error__inner_error}>
                    <div className={styles.error__inner_title}>Ваши запросы закончились</div>
                </div>
            </div>
        </div>
    );
};

export default ErrorForbidden;
