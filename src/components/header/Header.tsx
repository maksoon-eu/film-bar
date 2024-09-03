import { Link } from "react-router-dom";

import Search from '../search/Search';

import logo from '../../assets/logo/logo.png';

import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <Link to={'/'} className={styles.header__inner_logo}>
                    <img src={logo} alt="MovieBar logo" className="img" />
                </Link>
                <Search />
            </div>
        </header>
    );
};

export default Header;
