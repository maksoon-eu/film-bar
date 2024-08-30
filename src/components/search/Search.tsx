import { useState } from 'react';

import SearchModal from '../searchModal/searchModal';

import styles from './search.module.scss';

const Search = () => {
    const [inputSearch, setInputSearch] = useState<string>('');
    const [open, setOpen] = useState<boolean>(true);

    const openHandler = () => {
        setOpen(true);
    };

    const closeHandler = () => {
        setOpen(false);
    };

    const onInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        openHandler();
        setInputSearch(e.currentTarget.value);
    };

    return (
        <div className={styles.search}>
            <div className={styles.search__inner}>
                <input
                    className={styles.search__inner_input}
                    value={inputSearch}
                    onChange={onInputSearch}
                />
                <div className={styles.search__inner_icon}>
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.9374 3.58301C8.98697 3.58301 7.11641 4.35782 5.73724 5.73699C4.35806 7.11617 3.58325 8.98673 3.58325 10.9372C3.58325 12.8876 4.35806 14.7582 5.73724 16.1374C7.11641 17.5165 8.98697 18.2913 10.9374 18.2913C12.8765 18.2913 14.7366 17.5255 16.1134 16.1614C16.1229 16.1515 16.1325 16.1416 16.1423 16.1318C16.1509 16.1232 16.1597 16.1147 16.1685 16.1063C17.5283 14.7301 18.2916 12.873 18.2916 10.9372C18.2916 8.98673 17.5168 7.11617 16.1376 5.73699C14.7584 4.35782 12.8879 3.58301 10.9374 3.58301ZM19.2452 17.117C20.5661 15.3414 21.2916 13.1767 21.2916 10.9372C21.2916 8.19108 20.2007 5.55746 18.2589 3.61567C16.3171 1.67389 13.6835 0.583008 10.9374 0.583008C8.19132 0.583008 5.5577 1.67389 3.61592 3.61567C1.67413 5.55746 0.583252 8.19108 0.583252 10.9372C0.583252 13.6833 1.67413 16.3169 3.61592 18.2587C5.5577 20.2005 8.19132 21.2913 10.9374 21.2913C13.1801 21.2913 15.3478 20.5638 17.1248 19.2393L20.8133 22.9344C21.3986 23.5207 22.3483 23.5215 22.9346 22.9363C23.5209 22.351 23.5218 21.4013 22.9365 20.815L19.2452 17.117Z"></path>
                    </svg>
                </div>
            </div>

            <SearchModal inputSearch={inputSearch} open={open} closeHandler={closeHandler} />
        </div>
    );
};

export default Search;
