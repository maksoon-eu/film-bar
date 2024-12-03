import { selectFilmsSliderNew } from '../../store/features/filmsSliderNew/selectors/featureFilmsSliderNewSelectors';
import { getFilmsSliderNew } from '../../store/features/filmsSliderNew/service/filmsSliderNewService';
import { selectFilmsSliderPopular } from '../../store/features/filmsSliderPopular/selectors/featureFilmsSliderPopularSelectors';
import { getFilmsSliderPopular } from '../../store/features/filmsSliderPopular/service/filmsSliderPopularService';
import { selectSeries } from "../../store/features/series/selectors/featureSeriesSelector";
import { getSeries } from '../../store/features/series/service/seriesService';

import MainSlider from '../../components/mainSlider/MainSlider';
import GenreSlider from '../../components/genresSlider/GenresSlider';
import TrailersSlider from '../../components/trailersSlider/TrailersSlider';
import FilmsSlider from '../../components/filmsSlider/FilmsSlider';

const MainPage = () => {
    return (
        <>
            <MainSlider />
            <div className="content__page">
                <GenreSlider />
                <FilmsSlider
                    title="Новые фильмы"
                    selector={selectFilmsSliderNew}
                    fetchData={getFilmsSliderNew}
                />
                <TrailersSlider />
                <FilmsSlider
                    title="Популярные фильмы"
                    selector={selectFilmsSliderPopular}
                    fetchData={getFilmsSliderPopular}
                />
                <FilmsSlider
                    title="Популярные сериалы"
                    selector={selectSeries}
                    fetchData={getSeries}
                />
            </div>
        </>
    );
};

export default MainPage;
