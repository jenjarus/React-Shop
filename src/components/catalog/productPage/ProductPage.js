import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {setProductToBasket} from "../../../actions/basket";
import {setProductToViewed} from "../../../actions/viewed";
import {deleteProductToFavorite, setProductToFavorite} from "../../../actions/favorite";
import Viewed from "../../Other/viewed/Viewed";
import ModalWindow from "../../Other/ModalWindow";
import InputQty from "../../Other/InputQty";
import Loading from "../../Other/Loading";
import {ReactComponent as IconFavorite} from "../../../images/icons/favorite.svg";

const ProductPage = () => {
    const params = useParams();
    const id = +params.id || '';
    const dispatch = useDispatch();
    const [productData, setProductData] = useState([]);
    const favoriteItems = useSelector((store) => store.favorite.items);
    const checkFavoriteItem = favoriteItems.find((el) => el === id);
    const [count, setCount] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [flagFavorite, setFlagFavorite] = useState(!!checkFavoriteItem);
    const classActiveFavorite = flagFavorite ? ' active' : '';
    const [loading, setLoading] = useState(true);

    const getProductData = async () => {
        setLoading(true);

        try {
            const url = `https://api.punkapi.com/v2/beers/${id}`;
            const apiResponse = await fetch(url);
            const data = await apiResponse.json();

            setProductData(data[0]);
            dispatch(setProductToViewed(id));
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const getBuy = () => {
        (+count <= 1) && setCount(1);

        const item = {
            id: productData.id,
            name: productData.name,
            price: productData.ibu,
            qty: count
        };
        dispatch(setProductToBasket(item));
        setOpenModal(true);
    };

    const getFavorite = () => {
        if (checkFavoriteItem) {
            dispatch(deleteProductToFavorite(productData.id));
            setFlagFavorite(false);
        } else {
            dispatch(setProductToFavorite(productData.id));
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
                <div className="modal-window__name-product">{productData.name}</div>
                <div className="modal-window__buttons">
                    <Link to="/basket" className="btn">Перейти в корзину</Link>
                    <button onClick={() => setOpenModal(false)} className="btn btn--transparent">Продолжить покупки</button>
                </div>
            </ModalWindow>
        )
    };

    const ProductDescription = () => {
        if(productData.description) {
            return (
                <div className="product-desc">
                    <div className="product-desc__title">Описание</div>
                    <div className="product-desc__text">{productData.description}</div>
                </div>
            )
        }
    };

    const renderContent = () => {
        if (!loading) {
            return (
                <>
                    <h1>{productData.name}</h1>
                    <div className="page page-product">
                        <div className="page-cols">
                            <div className="page-col__2">
                                <div className="product-image">
                                    <img src={productData.image_url} alt={productData.name}/>
                                </div>
                            </div>
                            <div className="page-col__2">
                                <div className="product-info">
                                    <div className="product-info__price">
                                        <span className="product-info__price-text">Цена:</span>
                                        <span className="product-info__price-current">{productData.ibu} $</span>
                                    </div>
                                    <div className="product-info__btns">
                                        <InputQty
                                            customClass="product-info__qty"
                                            count={count}
                                            setCount={setCount}
                                        />
                                        <div className="product-info__buy">
                                            <span className="btn catalog-item__buy-btn" onClick={getBuy}>Купить</span>
                                        </div>
                                        <div className={"product-info__favorite" + classActiveFavorite}>
                                            <span className="btn product-info__favorite-btn"
                                                  onClick={getFavorite}><IconFavorite/></span>
                                        </div>
                                    </div>
                                    <div className="product-info__char">
                                        <div className="product-info__char-title">Характеристики</div>
                                        <ul className="product-info__char-items">
                                            {productData.volume.value && <li>Объем: {productData.volume.value} л</li>}
                                            {productData.boil_volume.value && <li>Объем кипячения: {productData.boil_volume.value} л</li>}
                                            {productData.attenuation_level && <li>Аттенюация: {productData.attenuation_level}</li>}
                                            {productData.abv && <li>ABV: {productData.abv}</li>}
                                            {productData.ebc && <li>EBC: {productData.ebc}</li>}
                                            {productData.ibu && <li>IBU: {productData.ibu}</li>}
                                            {productData.srm && <li>SRM: {productData.srm}</li>}
                                            {productData.ph && <li>Ph: {productData.ph}</li>}
                                            {productData.method.fermentation.temp.value && <li>Ферментация: {productData.method.fermentation.temp.value} °C</li>}
                                            {productData.food_pairing && <li>Сочетается
                                                с: {productData.food_pairing.map(item => item).join(', ')}</li>}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductDescription />
                    <Viewed />
                    <ModalAddCard />
                </>
            )
        } else {
            return <Loading/>
        }
    };

    useEffect(() => {
        getProductData();
    }, [id]);

    return (
        <>
            {renderContent()}
        </>
    );
};

export default ProductPage;
