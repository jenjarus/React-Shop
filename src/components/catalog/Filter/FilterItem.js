import React from "react";

const FilterItem = ({num, data, nameFilter, filtersSelect, setFiltersSelect}) => {
    const checkedSelected = filtersSelect[nameFilter].includes(data) ? 'checked' : '';

    const changeFilter = () => {
        let newFiltersSelect = {};
        Object.assign(newFiltersSelect, filtersSelect);
        if (newFiltersSelect[nameFilter].includes(data)) {
            newFiltersSelect[nameFilter] = newFiltersSelect[nameFilter].filter(el => el !== data)
        } else {
            newFiltersSelect[nameFilter].push(data);
        }

        setFiltersSelect(newFiltersSelect);
    };

    return (
        <div className="form-checkbox">
            <input type="checkbox" id={nameFilter + num} onChange={changeFilter} checked={checkedSelected}/>
            <label htmlFor={nameFilter + num}>{data}</label>
        </div>
    )
};

export default FilterItem;
