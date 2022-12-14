import React, {useState} from "react";
import Arrow from '../../images/icons/chevron-down.svg';
import FilterItem from "./FilterItem";

const Filter = ({data, title, nameFilter, open = false}) => {
    const [openBox, setOpenBox] = useState(open);
    const filtersElem = data.map(el => el[nameFilter]);
    const arrItem = filtersElem.filter((item, index) => filtersElem.indexOf(item) === index); // Убирает дубли
    arrItem.sort((a, b) => a - b);

    let openClass = openBox ? ' open' : '';

    return (
        <div className={`filter filter-${nameFilter}` + openClass}>
            <div className="filter__title" onClick={() => setOpenBox(!openBox)}>{title}:
                <span className="filter__title-icon">
                    <Arrow/>
                </span>
            </div>
            <div className="filter__items">
                {arrItem.map((el, i) => (el) ? <FilterItem key={i} num={i} data={el} nameFilter={nameFilter} /> : '')}
            </div>
        </div>
    )
};

export default Filter;
