import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setProductToBasket} from '../../../actions/basket';
import {setProductToFavorite, deleteProductToFavorite} from '../../../actions/favorite';
import InputQty from "../../Other/InputQty";
import {ReactComponent as IconFavorite} from '../../../images/icons/favorite.svg';

const ProductCard = ({data}) => {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((store) => store.favorite.items);
    const checkFavoriteItem = favoriteItems.find((id) => id === data.id);
    const [count, setCount] = useState(1);
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

    return (
        <div className="catalog-item">
            <div className="catalog-item__wrapper">
                <div className={"catalog-item__favorite" + classActiveFavorite}>
                    <span className="btn catalog-item__favorite-btn" onClick={getFavorite}><IconFavorite /></span>
                </div>
                <div className="catalog-item__image">
                    <img src={data.image_url} alt="img_catalog"/>
                </div>
                <div className="catalog-item__name">{data.name}</div>
                <div className="catalog-item__price">{data.ibu} $</div>
                <InputQty
                    count={count}
                    setCount={setCount}
                />
                <div className="catalog-item__buy">
                    <span className="btn catalog-item__buy-btn" onClick={getBuy}>Купить</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
