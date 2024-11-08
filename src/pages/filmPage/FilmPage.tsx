import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/selector.hook';
import { selectFilm } from '../../store/features/film/selectors/getFilm';
import { useAppDispatch } from '../../hooks/dispatch.hook';
import { useEffect } from 'react';
import { getFilm } from '../../store/features/film/service/filmService';

import ChooseFilm from '../../components/chooseFilm/MainPoster/MainPoster';
import FilmPlayer from '../../components/filmPlayer/FilmPlayer';
import FilmInfo from '../../components/chooseFilm/filmInfo/FilmInfo';
import FilmPreview from '../../components/chooseFilm/filmPreview/FilmPreview';
import ActorsSlider from '../../components/actorsSlider/ActorsSlider';
import SequelAndPrequelSlider from '../../components/sequelAndPrequelSlider/SequelAndPrequelSlider';

const FilmPage = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();
    const { loadingStatus, film } = useAppSelector(selectFilm);

    useEffect(() => {
        dispatch(getFilm(id as string));
    }, [id]);

    useEffect(() => {
        if (film.length) {
            document.title = film[0].name || film[0].enName || film[0].alternativeName || 'FilmBar';

            return () => {
                document.title = 'FilmBar';
            };
        }
    }, [film]);

    return (
        <>
            <ChooseFilm loadingStatus={loadingStatus} film={film} />
            <div className="content-page">
                <FilmPreview film={film} loadingStatus={loadingStatus} />
                <FilmInfo film={film} loadingStatus={loadingStatus} />
                <FilmPlayer
                    loadingStatus={loadingStatus}
                    filmId={film[0]?.id}
                    backdropSrc={film[0]?.backdrop?.url}
                />
                <ActorsSlider film={film} loadingStatus={loadingStatus} />
                <SequelAndPrequelSlider film={film} loadingStatus={loadingStatus} />
            </div>
        </>
    );
};

export default FilmPage;
