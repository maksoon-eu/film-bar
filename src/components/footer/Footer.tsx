import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__inner}>
                <div className={styles.footer__inner_item}>
                    {`© ${new Date().getFullYear()} «MovieBar». Все права защищены`}
                </div>
                <div className={styles.footer__inner_item}>
                    При полном или частичном использовании материалов с сайта ссылка на источник
                    обязательна.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
