import FilmsCatalog from '../../components/filmsCatalog/FilmsCatalog';
import FilterPanel from '../../components/filterPanel/FilterPanel';

const FilmsPage = () => {
    return (
        <div className="content__page content__page--max">
            <FilmsCatalog />
            <FilterPanel />
        </div>
    );
};

export default FilmsPage;
