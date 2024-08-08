import Search from "../search/Search";
import styles from './header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="logo">
                <img src="" alt="" className="img" />
            </div>
            <Search />
        </header>
    )
}

export default Header;