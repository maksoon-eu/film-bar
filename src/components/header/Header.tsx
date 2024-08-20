import Search from '../search/Search';

import logo from '../../assets/logo/logo.png';

import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.header__inner_logo}>
                    <img src={logo} alt="MovieBar logo" className="img" />
                </div>
                <Search />
            </div>
        </header>
    );
};

export default Header;
