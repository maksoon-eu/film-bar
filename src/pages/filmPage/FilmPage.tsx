import { useParams } from 'react-router-dom';
import ChooseFilm from '../../components/chooseFilm/ChooseFilm';
import FilmPlayer from '../../components/filmPlayer/FilmPlayer';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectFilm } from '../../store/features/featureFilm/featureFilmSelector';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useEffect } from 'react';
import { getFilm } from '../../service/filmService';

const FilmPage = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();
    const { loadingStatus, film } = useAppSelector(selectFilm);

    useEffect(() => {
        dispatch(getFilm(Number(id)));
    }, [id]);

    useEffect(() => {
        if (film.length) {
            document.title = film[0].name;

            return () => {
                document.title = 'FilmBar';
            };
        }
    }, [film]);

    return (
        <div className="content-page">
            <ChooseFilm loadingStatus={loadingStatus} film={film} />
            <FilmPlayer
                loadingStatus={loadingStatus}
                filmId={film[0]?.id}
                backdropSrc={film[0]?.backdrop.url}
            />
        </div>
    );
};

export default FilmPage;
