import {useDispatch} from "react-redux";
import {resetFilters} from "../../../actions/catalog";
import Filter from "./Filter";
import FilterPrice from "./FilterPrice";

const Filters = ({data}) => {
    const dispatch = useDispatch();

    return (
        <div className="catalog-sidebar">
            <div className="catalog-sidebar__title">Фильтр</div>
            <FilterPrice />
            <Filter
                data={data}
                title={"ABV"}
                nameFilter={"abv"}
                open={true}
            />
            <Filter
                data={data}
                title={"EBC"}
                nameFilter={"ebc"}
            />
            <Filter
                data={data}
                title={"IBU"}
                nameFilter={"ibu"}
            />
            <button className="catalog-sidebar__reset btn" onClick={() => dispatch(resetFilters())}>Сбросить</button>
        </div>
    )
};

export default Filters;
