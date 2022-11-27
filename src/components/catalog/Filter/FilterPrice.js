import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Arrow} from '../../../images/icons/chevron-down.svg';
import {changeMinPrice, changeMaxPrice} from "../../../actions/catalog";

const FilterPrice = () => {
    const dispatch = useDispatch();
    const minState = useSelector((store) => store.catalog.minPrice);
    const maxState = useSelector((store) => store.catalog.maxPrice);
    const [minPrice, setMinPrice] = useState(minState);
    const [maxPrice, setMaxPrice] = useState(maxState);
    const [openBox, setOpenBox] = useState(true);
    let openClass = openBox ? ' open' : '';

    const onChangeMin = ({target}) => {
        let { value } = target;
        setMinPrice(value);
        dispatch(changeMinPrice(value))
    };

    const onChangeMax = ({target}) => {
        let { value } = target;
        setMaxPrice(value);
        dispatch(changeMaxPrice(value))
    };

    useEffect(() => {
        // Значение по умолчанию после сброса фильтра
        setMinPrice(minState);
        setMaxPrice(maxState)
    }, [minState, maxState]);

    return(
        <div className={"filter filter-price" + openClass}>
            <div className="filter__title" onClick={() => setOpenBox(!openBox)}>Цена:
                <span className="filter__title-icon">
                    <Arrow/>
                </span>
            </div>
            <div className="filter__items filter__items--price">
                <span className="filter__items-text">от</span>
                <div className="form-input">
                    <input type="number" value={minPrice} onChange={onChangeMin} />
                </div>
                <span className="filter__items-text">до</span>
                <div className="form-input">
                    <input type="number" value={maxPrice} onChange={onChangeMax} />
                </div>
            </div>
        </div>
    )
};

export default FilterPrice;
