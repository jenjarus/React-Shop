import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Arrow from '../../images/icons/chevron-down.svg';
import {changeMinPrice, changeMaxPrice} from "../../actions/catalog";
import ReactSlider from 'react-slider';

const FilterPrice = () => {
    const dispatch = useDispatch();
    const minState = useSelector((store) => store.catalog.minPrice);
    const maxState = useSelector((store) => store.catalog.maxPrice);
    const minInit = useSelector((store) => store.catalog.minPriceInit);
    const maxInit = useSelector((store) => store.catalog.maxPriceInit);
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

    const onChangeRange = (value) => {
        setMinPrice(value[0]);
        dispatch(changeMinPrice(value[0]));
        setMaxPrice(value[1]);
        dispatch(changeMaxPrice(value[1]));
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
            <ReactSlider
                className="range-slider"
                thumbClassName="range-slider__dots"
                trackClassName="range-slider__track"
                min={minInit}
                max={maxInit}
                defaultValue={[minPrice, maxPrice]}
                pearling
                minDistance={1}
                onChange={onChangeRange}
            />
        </div>
    )
};

export default FilterPrice;
