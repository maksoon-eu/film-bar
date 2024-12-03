import { useCallback, useMemo } from 'react';
import { IFilm } from '../../../store/features/film/types/featureFilmType';
import { LoadingStatusType } from '../../../types/types';
import { capitalizeFirstLetter } from '../../../utils/ui/capitalizeFirstLetter';
import { formatDate } from '../../../utils/ui/transformDate';
import { statusTranslation } from '../../../utils/ui/statusTranslation';

import SkeletonFilmInfo from '../../../shared/skeleton/SkeletonFilmInfo';
import FilmTableRow from '../filmTableRow/FilmTableRow';

import styles from './filmInfo.module.scss';

interface IFilmInfo {
    film: IFilm[];
    loadingStatus: LoadingStatusType;
}

const FilmInfo = ({ film, loadingStatus }: IFilmInfo) => {
    const renderProfession = useCallback(
        (profession: string) => {
            const professionList = film[0]?.persons
                ?.filter((item) => item.profession === profession)
                .map((item) => item.name || item.enName)
                .join(', ');

            return professionList?.length ? professionList : '...';
        },
        [film]
    );

    const renderFilmTable = useCallback(
        (filmItem: IFilm) => (
            <table
                className={`${styles.filmInfo__table} ${styles.filmInfo__table_left}`}
                key={filmItem.id}>
                <tbody>
                    <FilmTableRow
                        label="Год"
                        value={filmItem.year ? `${filmItem.year} г.` : '...'}
                    />
                    <FilmTableRow
                        label="Страны"
                        value={
                            filmItem.countries?.map((country) => country.name).join(', ') || '...'
                        }
                    />
                    <FilmTableRow
                        label="Жанры"
                        value={filmItem.genres?.map((genre) => genre.name).join(', ') || '...'}
                    />
                    <FilmTableRow
                        label={filmItem.typeNumber === 2 ? 'Длительность серии' : 'Длительность'}
                        value={
                            filmItem.movieLength
                                ? `${filmItem.movieLength} мин / ${Math.floor(
                                      filmItem.movieLength / 60
                                  )} ч ${filmItem.movieLength % 60} мин`
                                : '...'
                        }
                    />
                    <FilmTableRow
                        label={filmItem.typeNumber === 2 ? 'Завершенность' : 'Бюджет'}
                        value={
                            filmItem.status && filmItem.typeNumber === 2
                                ? statusTranslation(filmItem.status)
                                : filmItem.budget?.value && filmItem.budget?.currency
                                ? `${filmItem.budget.value} ${filmItem.budget.currency}`
                                : '...'
                        }
                    />
                    <FilmTableRow
                        label="Сборы в мире"
                        value={
                            filmItem.fees?.world?.value
                                ? `${filmItem.fees.world.value} ${filmItem.fees.world.currency}`
                                : '...'
                        }
                    />
                    <FilmTableRow
                        label="Премьера в мире"
                        value={filmItem.premiere ? formatDate(filmItem.premiere.world) : '...'}
                    />
                </tbody>
            </table>
        ),
        []
    );

    const renderPeopleTable = (personList: Array<string>) => (
        <table className={styles.filmInfo__table}>
            <tbody>
                {personList.map((profession) => (
                    <FilmTableRow
                        key={profession}
                        label={capitalizeFirstLetter(profession)}
                        value={renderProfession(profession)}
                    />
                ))}
            </tbody>
        </table>
    );

    const filmInfoList = useMemo(
        () =>
            film.map((filmItem) => (
                <div key={filmItem.id}>
                    <div className="title">О фильме</div>
                    <div className={styles.filmInfo__tables}>
                        {renderFilmTable(filmItem)}
                        {renderPeopleTable([
                            'режиссеры',
                            'продюсеры',
                            'операторы',
                            'композиторы',
                            'художники',
                            'монтажеры',
                            'сценаристы',
                        ])}
                    </div>
                </div>
            )),
        [film]
    );

    if (loadingStatus === 'loading') {
        return <SkeletonFilmInfo />;
    } else if (loadingStatus === 'error') {
        return <div>Error</div>;
    }

    return <div className={styles.filmInfo}>{filmInfoList}</div>;
};

export default FilmInfo;
