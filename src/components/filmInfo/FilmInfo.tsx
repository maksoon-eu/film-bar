import { IFilm } from '../../store/features/featureFilm/featureFilmType';
import { LoadingStatusType } from '../../types/types';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

import SkeletonFilmInfo from '../../shared/skeleton/SkeletonFilmInfo';

import styles from './filmInfo.module.scss';

interface IFilmInfo {
    film: IFilm[];
    loadingStatus: LoadingStatusType;
}

const FilmInfo = ({ film, loadingStatus }: IFilmInfo) => {
    const renderProfession = (profession: string) => {
        const professionList = film[0]?.persons
            ?.filter((item) => item.profession === profession)
            .map((item) => item.name || item.enName)
            .join(', ');

        return professionList?.length ? professionList : '...';
    };

    const renderFilmTable = (filmItem: IFilm) => (
        <table className={styles.filmInfo__table} key={filmItem.id}>
            <tbody>
                <TableRow label="Год" value={filmItem.year ? `${filmItem.year} г.` : '...'} />
                <TableRow
                    label="Страны"
                    value={filmItem.countries?.map((country) => country.name) || '...'}
                />
                <TableRow
                    label="Жанры"
                    value={
                        filmItem.genres?.map((genre) => capitalizeFirstLetter(genre.name)) || '...'
                    }
                />
                <TableRow
                    label={filmItem.typeNumber === 2 ? 'Длительность серии' : 'Длительность'}
                    value={
                        filmItem.movieLength
                            ? `${filmItem.movieLength} мин / ${Math.floor(
                                  filmItem.movieLength / 60
                              )} ч ${filmItem.movieLength % 60} мин`
                            : '...'
                    }
                />
                <TableRow
                    label={filmItem.typeNumber === 2 ? 'Конец' : 'Бюджет'}
                    value={
                        filmItem.typeNumber === 2
                            ? filmItem.status
                            : filmItem.budget
                            ? `${filmItem.budget.value} ${filmItem.budget.currency}`
                            : '...'
                    }
                />
                <TableRow
                    label="Сборы в мире"
                    value={
                        filmItem.fees
                            ? `${filmItem.fees.world.value} ${filmItem.fees.world.currency}`
                            : '...'
                    }
                />
                <TableRow label="Премьера в мире" value={filmItem.premiere.world || '...'} />
            </tbody>
        </table>
    );

    const renderPeopleTable = (personList: Array<string>) => (
        <table className={styles.filmInfo__table}>
            <tbody>
                {personList.map((profession) => (
                    <TableRow
                        key={profession}
                        label={capitalizeFirstLetter(profession)}
                        value={renderProfession(profession)}
                    />
                ))}
            </tbody>
        </table>
    );

    const TableRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
        <tr className={styles.filmInfo__row}>
            <th className={styles.filmInfo__title}>{label}</th>
            <td className={styles.filmInfo__text}>{value}</td>
        </tr>
    );

    if (loadingStatus === 'loading') {
        return <SkeletonFilmInfo />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return (
        <div className={styles.filmInfo}>
            {film.map((filmItem) => (
                <div key={filmItem.id}>
                    <div className="title">О фильме</div>
                    <div className={styles.filmInfo__tables}>
                        {renderFilmTable(filmItem)}
                        {renderPeopleTable([
                            'актеры',
                            'режиссеры',
                            'продюсеры',
                            'операторы',
                            'композиторы',
                            'художники',
                            'монтажеры',
                        ])}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilmInfo;