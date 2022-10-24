import React, {useState} from "react";
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {setProductToBasket} from '../../../actions/basket';
import {setProductToFavorite, deleteProductToFavorite} from '../../../actions/favorite';
import InputQty from "../../Other/InputQty";
import ModalWindow from "../../Other/ModalWindow";
import {ReactComponent as IconFavorite} from '../../../images/icons/favorite.svg';

const ProductCard = ({data}) => {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((store) => store.favorite.items);
    const checkFavoriteItem = favoriteItems.find((id) => id === data.id);
    const [count, setCount] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [flagFavorite, setFlagFavorite] = useState(!!checkFavoriteItem);
    const classActiveFavorite = flagFavorite ? ' active' : '';

    const getBuy = () => {
        (+count <= 1) && setCount(1);

        const item = {
            id: data.id,
            name: data.name,
            price: data.ibu,
            qty: count
        };
        dispatch(setProductToBasket(item));
        setOpenModal(true);
    };

    const getFavorite = () => {
        if (checkFavoriteItem) {
            dispatch(deleteProductToFavorite(data.id));
            setFlagFavorite(false);
        } else {
            dispatch(setProductToFavorite(data.id));
            setFlagFavorite(true);
        }
    };

    const ModalAddCard = () => {
        return (
            <ModalWindow
                title="Товар добавлен в корзину"
                isOpen={openModal}
                closeModal={() => setOpenModal(false)}
            >
                <div className="modal-window__name-product">{data.name}</div>
                <div className="modal-window__buttons">
                    <Link to="/basket" className="btn">Перейти в корзину</Link>
                    <button onClick={() => setOpenModal(false)} className="btn btn--transparent">Продолжить покупки</button>
                </div>
            </ModalWindow>
        )
    };

    return (
        <>
            <div className="catalog-item">
                <div className="catalog-item__wrapper">
                    <div className={"catalog-item__favorite" + classActiveFavorite}>
                        <span className="btn catalog-item__favorite-btn" onClick={getFavorite}><IconFavorite/></span>
                    </div>
                    <Link to={`/catalog/${data.id}`} className="catalog-item__link">
                        <div className="catalog-item__image">
                            <img src={data.image_url} alt="img_catalog"/>
                        </div>
                        <div className="catalog-item__name">{data.name}</div>
                        <div className="catalog-item__price">{data.ibu} $</div>
                    </Link>
                    <InputQty
                        count={count}
                        setCount={setCount}
                    />
                    <div className="catalog-item__buy">
                        <span className="btn catalog-item__buy-btn" onClick={getBuy}>Купить</span>
                    </div>
                </div>
            </div>
            <ModalAddCard />
        </>
    );
};

export default ProductCard;
