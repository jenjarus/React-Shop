import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
import Loading from "../../components/Other/Loading";
import Head from "next/head";


const Favorite = () => {
    const cartItems = useSelector((store) => store.favorite.items);
    const [loading, setLoading] = useState(false);
    const [favoriteItems, setFavoriteItems] = useState([]);

    const getFavoriteItems = async (items) => {
        setLoading(true);
        setFavoriteItems([]);

        const dataItems = await Promise.all(items.map(async item => {
            try {
                const url = `https://punkapi.online/v3/beers/${item}`;
                const apiResponse = await fetch(url);
                const data = await apiResponse.json();
                const dataObject = {
                    id: data.id,
                    name: data.name,
                    price: data.ibu,
                    image: data.image,
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
            <Head>
                <title>Избранное | Черное красное - магазин пива</title>
                <meta name="description" content="Черное красное - магазин пива" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
            </Head>
            <h1 className="page-title">Избранное</h1>
            {renderContent()}
        </>
    );
};

export default Favorite;
