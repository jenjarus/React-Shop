import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeSortFlag} from "../../../actions/catalog";
import {ReactComponent as Arrow} from '../../../images/icons/chevron-down.svg';

const arrSortFlag = [
    {flag: 'nameASC', text: 'От А до Я'},
    {flag: 'nameDESC', text: 'От Я до А'},
    {flag: 'priceASC', text: 'Сначала дешевые'},
    {flag: 'priceDESC', text: 'Сначала дорогие'}
];

const Sorting = () => {
    const dispatch = useDispatch();
    const sortFlag = useSelector((store) => store.catalog.sortFlag);
    const sortText = arrSortFlag.find(el => el.flag === sortFlag).text;
    const [openSelect, setOpenSelect] = useState(false);
    const openClass = openSelect ? " open" : "";

    return (
        <div className="catalog-sorting">
            <div className="catalog-sorting__select">
                <div className="catalog-sorting__text">Сортировать по</div>
                <div className={"select select--sorting" + openClass}>
                    <div className="select__text" onClick={() => setOpenSelect(!openSelect)}>{sortText}
                        <span className="select__text-icon">
                            <Arrow />
                        </span>
                    </div>
                    <ul className="select__items">
                        {arrSortFlag.map(el => {
                            const selectedClass = el.flag === sortFlag ? " selected" : "";

                            return (<li key={el.flag} className={"select__item" + selectedClass} onClick={() => {
                                dispatch(changeSortFlag(el.flag));
                                setOpenSelect(!openClass);
                            }}>{el.text}</li>)
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Sorting;
