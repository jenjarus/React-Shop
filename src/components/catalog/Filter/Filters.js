import {useDispatch} from "react-redux";
import {resetFilters} from "../../../actions/catalog";
import Filter from "./Filter";
import FilterPrice from "./FilterPrice";

const Filters = ({data, openSidebar, setOpenSidebar}) => {
    const dispatch = useDispatch();
    const openClass = openSidebar ? ' open' : '';

    return (
        <>
            <div className={"catalog-sidebar" + openClass}>
                <div className="catalog-sidebar__title">Фильтр</div>
                <FilterPrice/>
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
                <button className="catalog-sidebar__reset btn" onClick={() => {
                    dispatch(resetFilters());
                    setOpenSidebar(false);
                }}>Сбросить
                </button>
            </div>
            <div className={"catalog-sidebar__bg" + openClass} onClick={() => setOpenSidebar(false)} />
        </>
    )
};

export default Filters;
