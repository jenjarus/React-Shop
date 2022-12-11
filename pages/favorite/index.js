import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
import Loading from "../../components/Other/Loading";


const Favorite = () => {
    const cartItems = useSelector((store) => store.favorite.items);
    const [loading, setLoading] = useState(false);
    const [favoriteItems, setFavoriteItems] = useState([]);

    const getFavoriteItems = async (items) => {
        setLoading(true);
        setFavoriteItems([]);

        const dataItems = await Promise.all(items.map(async item => {
            try {
                const url = `https://api.punkapi.com/v2/beers/${item}`;
                const apiResponse = await fetch(url);
                const data = await apiResponse.json();
                const dataObject = {
                    id: data[0].id,
                    name: data[0].name,
                    price: data[0].ibu,
                    image_url: data[0].image_url,
                };

                return dataObject;
            } catch (err) {
                console.log(err);
            }
        }));

        setFavoriteItems(dataItems);
        setLoading(false);
    };

    const renderContent = () => {
        if(cartItems.length) {
            if (!loading) {
                return (
                    <div className="favorite-items">
                        {favoriteItems.map(el => <FavoriteCard key={el.id} data={el}/>)}
                    </div>
                )
            } else {
                return <Loading/>
            }
        } else {
            return <p>Нет избранных товаров</p>
        }
    };

    useEffect(() => {
        getFavoriteItems(cartItems)
    }, [cartItems.length]);

    return (
        <>
            <h1 className="page-title">Избранное</h1>
            {renderContent()}
        </>
    );
};

export default Favorite;
