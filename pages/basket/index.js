import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Link from 'next/link';
import BasketCard from "../../components/basketCard/basketCard";
import Loading from "../../components/Other/Loading";
import Head from "next/head";


const Basket = () => {
    const cartItems = useSelector((store) => store.basket.items);
    const [loading, setLoading] = useState(false);
    const [basketItems, setBasketItems] = useState([]);
    const cartTotal = cartItems.reduce((partialSum, item) => partialSum + (item.price * item.qty), 0);

    const getBasketItems = async (items) => {
        setLoading(true);
        setBasketItems([]);

        const dataItems = await Promise.all(items.map(async item => {
            try {
                const url = `https://punkapi.online/v3/beers/${item.id}`;
                const apiResponse = await fetch(url);
                const data = await apiResponse.json();
                const dataObject = {
                    id: data.id,
                    name: data.name,
                    price: data.ibu,
                    image: data.image,
                    qty: item.qty
                };

                return dataObject;
            } catch (err) {
                console.log(err);
            }
        }));

        setBasketItems(dataItems);
        setLoading(false);
    };

    const renderContent = () => {
        if (cartItems.length) {
            if (!loading) {
                return (
                    <>
                        <div className="basket-items">
                            {basketItems.map(el => <BasketCard key={el.id} data={el}/>)}
                        </div>
                        <div className="basket-total">
                            Всего: <span className="basket-total__bold">{cartTotal} $</span>
                        </div>
                        <div className="basket-checkout">
                            <Link href="/basket/checkout/" className="btn basket-checkout__btn">Перейти к оформлению</Link>
                        </div>
                    </>
                )
            } else {
                return <Loading/>
            }
        } else {
            return <p>Корзина пуста</p>
        }
    };

    useEffect(() => {
        getBasketItems(cartItems)
    }, [cartItems.length]);

    return (
        <>
            <Head>
                <title>Корзина | Черное красное - магазин пива</title>
                <meta name="description" content="Черное красное - магазин пива" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
            </Head>
            <h1 className="page-title">Корзина</h1>
            {renderContent()}
        </>
    );
};

export default Basket;
