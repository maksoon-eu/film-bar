import Search from '../search/Search';

import logo from '../../assets/logo/logo.png';

import styles from './header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src={logo} alt="MovieBar logo" className="img" />
            </div>
            <Search />
        </header>
    );
};

export default Header;
