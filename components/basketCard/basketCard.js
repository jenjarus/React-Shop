import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {editProductCount, deleteProduct} from '../../actions/basket';
import InputQty from "../../components/Other/InputQty";
import IconClose from '../../images/icons/close.svg';
import Link from 'next/link';

const BasketCard = ({data}) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(data.qty);

    const deleteItem = () => {
        dispatch(deleteProduct(data.id));
    };

    useEffect(() => {
        dispatch(editProductCount(data.id, count));
    }, [count]);

    return (
        <div className="basket-item">
            <div className="basket-item__wrapper">
                <div className="basket-item__image">
                    <Link href={`/catalog/${data.id}`} className="basket-item__link">
                        <img src={`https://punkapi.online/v3/images/${data.image}`} alt="img_catalog"/>
                    </Link>
                </div>
                <div className="basket-item__name">
                    <Link href={`/catalog/${data.id}`} className="basket-item__link">{data.name}</Link>
                </div>
                <div className="basket-item__price">{data.price} $</div>
                <InputQty
                    customClass={"basket-item__qty"}
                    count={count}
                    setCount={setCount}
                />
                <div className="basket-item__total">{data.price * count} $</div>
                <div className="basket-item__delete">
                    <span className="btn basket-item__delete-btn" onClick={deleteItem}><IconClose/></span>
                </div>
            </div>
        </div>
    );
};

export default BasketCard;
