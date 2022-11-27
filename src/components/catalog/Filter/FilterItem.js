import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFilters} from "../../../actions/catalog";

const FilterItem = ({num, data, nameFilter}) => {
    const dispatch = useDispatch();
    const filterSelect = useSelector((store) => store.catalog.filters);
    const checkedSelected = filterSelect[nameFilter]?.includes(data + '') ? 'checked' : '';

    const changeFilter = (e) => {
        dispatch(changeFilters(e, nameFilter));
    };

    return (
        <div className="form-checkbox">
            <input type="checkbox" id={nameFilter + num} value={data} onChange={changeFilter} checked={checkedSelected}/>
            <label htmlFor={nameFilter + num}>{data}</label>
        </div>
    )
};

export default FilterItem;
