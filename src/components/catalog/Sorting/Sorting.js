import React, {useEffect, useState} from "react";
import {ReactComponent as Arrow} from '../../../images/icons/chevron-down.svg';

const arrSortFlag = [
    {flag: 'nameASC', text: 'От А до Я'},
    {flag: 'nameDESC', text: 'От Я до А'},
    {flag: 'priceASC', text: 'Сначала дешевые'},
    {flag: 'priceDESC', text: 'Сначала дорогие'}
];

const Sorting = ({sortFlag, setSortFlag}) => {
    const [openSelect, setOpenSelect] = useState(false);
    const aaa = arrSortFlag.find(el => el.flag === sortFlag).text;
    const openClass = openSelect ? " open" : "";

    return (
        <div className="catalog-sorting">
            <div className="catalog-sorting__select">
                <div className="catalog-sorting__text">Сортировать по</div>
                <div className={"select select--sorting" + openClass}>
                    <div className="select__text" onClick={() => setOpenSelect(!openSelect)}>{aaa}
                        <span className="select__text-icon">
                            <Arrow />
                        </span>
                    </div>
                    <ul className="select__items">
                        {arrSortFlag.map(el => {
                            const selectedClass = el.flag === sortFlag ? " selected" : "";

                                return (<li key={el.flag} className={"select__item" + selectedClass} onClick={() => {
                                    setSortFlag(el.flag);
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
