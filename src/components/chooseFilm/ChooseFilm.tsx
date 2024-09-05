import { IFilm } from '../../store/features/featureFilm/featureFilmType';
import { LoadingStatusType } from '../../types/types';

import styles from './chooseFilm.module.scss';

interface IChooseFilm {
    film: IFilm[] | [];
    loadingStatus: LoadingStatusType;
}

const ChooseFilm = ({ loadingStatus, film }: IChooseFilm) => {
    const filmItem = film.map((item) => {
        return (
            <div key={item.id} className={styles.chooseFilm__item}>
                {item.name}
            </div>
        );
    });

    if (loadingStatus === 'loading') {
        return <div>Loading...</div>;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <div className={styles.chooseFilm}>{filmItem}</div>;
};

export default ChooseFilm;
