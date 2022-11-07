import React, {useEffect, useState} from "react";
//import FilterPrice from "./FilterPrice";
import Filter from "./Filter";

const arrFilters = {
    abv: [],
    ebc: [],
    ibu: [],
};

const Filters = ({data, filtersSelect, setFiltersSelect}) => {
    const [filters, setFilters] = useState(arrFilters);

    // Получаем все значения для фильтрации
    const filtersData = () => {
        let newFilters = filters;

        data.map(el => {
            for (let key in newFilters) {
                if(newFilters[key]) {
                    newFilters[key].push(el[key])
                }
            }
        });

        setFilters(newFilters);
    };

    useEffect(() => {
        filtersData();
    }, [data]);

    return (
        <div className="catalog-sidebar">
            <div className="catalog-sidebar__title">Фильтр</div>
            {/*<FilterPrice />*/}
            <Filter
                data={filters.abv}
                title={"ABV"}
                nameClassComp={"size"}
                nameFilter={"abv"}
                open={true}
                filtersSelect={filtersSelect}
                setFiltersSelect={setFiltersSelect}
            />
            <Filter
                data={filters.ebc}
                title={"EBC"}
                nameClassComp={"color"}
                nameFilter={"ebc"}
                filtersSelect={filtersSelect}
                setFiltersSelect={setFiltersSelect}
            />
            <Filter
                data={filters.ibu}
                title={"IBU"}
                nameClassComp={"material"}
                nameFilter={"ibu"}
                filtersSelect={filtersSelect}
                setFiltersSelect={setFiltersSelect}
            />
        </div>
    )
};

export default Filters;
