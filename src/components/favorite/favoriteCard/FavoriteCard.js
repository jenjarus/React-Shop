import {useDispatch, useSelector} from "react-redux";
import {deleteProductToFavorite} from '../../../actions/favorite';
import {ReactComponent as IconClose} from '../../../images/icons/close.svg';
import {Link} from "react-router-dom";
import React from "react";

const FavoriteCard = ({data}) => {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((store) => store.favorite.items);

    const deleteFavorite = () => {
        if (favoriteItems.find((id) => id === data.id)) dispatch(deleteProductToFavorite(data.id));
    };

    return (
        <div className="favorite-item">
            <div className="favorite-item__wrapper">
                <div className="favorite-item__delete">
                    <span className="btn favorite-item__delete-btn" onClick={deleteFavorite}><IconClose/></span>
                </div>
                <Link to={`/catalog/${data.id}`} className="favorite-item__link">
                    <div className="favorite-item__image">
                        <img src={data.image_url} alt="img_favorite"/>
                    </div>
                    <div className="favorite-item__name">{data.name}</div>
                    <div className="favorite-item__price">{data.price} $</div>
                </Link>
            </div>
        </div>
    );
};

export default FavoriteCard;
