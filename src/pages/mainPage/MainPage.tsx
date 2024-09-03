import { selectFilmsSliderNew } from '../../store/features/featureFilmsSliderNew/featureFilmsSliderNewSelectors';
import { getFilmsSliderNew } from '../../service/filmsSliderNewService';
import { selectFilmsSliderPopular } from '../../store/features/featureFilmsSliderPopular/featureFilmsSliderPopularSelectors';
import { getFilmsSliderPopular } from '../../service/filmsSliderPopularService';
import { selectSeries } from '../../store/features/featureSeries/featureSeriesSelector';
import { getSeries } from '../../service/seriesService';

import MainSlider from '../../components/mainSlider/MainSlider';
import GenreSlider from '../../components/genresSlider/GenresSlider';
import TrailersSlider from '../../components/trailersSlider/TrailersSlider';
import FilmsSlider from '../../components/filmsSlider/FilmsSlider';

import sss from '../../assets/countries/Австралия.png';
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <img src={sss} alt="" />
            <Link to={'/films/2323'}>itiitit</Link>
            <MainSlider />
            <div className="content-page">
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
