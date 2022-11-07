import React, {useState} from "react";
import {ReactComponent as Arrow} from '../../../images/icons/chevron-down.svg';
import FilterItem from "./FilterItem";

const Filter = ({data, title, nameClassComp, nameFilter, filtersSelect, setFiltersSelect, open = false}) => {
    const [openBox, setOpenBox] = useState(open);
    const arrItem = data.filter((item, index) => data.indexOf(item) === index); // Убирает дубли
    arrItem.sort((a, b) => a - b);

    let openClass = openBox ? ' open' : '';

    return (
        <div className={`filter filter-${nameClassComp}` + openClass}>
            <div className="filter__title" onClick={() => setOpenBox(!openBox)}>{title}:
                <span className="filter__title-icon">
                    <Arrow/>
                </span>
            </div>
            <div className="filter__items">
                {arrItem.map((el, i) => (el) ? <FilterItem key={i} num={i} data={el} nameFilter={nameFilter} filtersSelect={filtersSelect} setFiltersSelect={setFiltersSelect}/> : '')}
            </div>
        </div>
    )
};

export default Filter;
