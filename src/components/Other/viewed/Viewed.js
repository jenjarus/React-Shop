import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ProductCard from "../../catalog/productCard/ProductCard";

const Viewed = () => {
    const cartItems = useSelector((store) => store.viewed.items);
    const [loading, setLoading] = useState(false);
    const [viewedItems, setViewedItems] = useState([]);

    const getViewedItems = async (items) => {
        setLoading(true);
        setViewedItems([]);

        const dataItems = await Promise.all(items.map(async item => {
            try {
                const url = `https://api.punkapi.com/v2/beers/${item}`;
                const apiResponse = await fetch(url);
                const data = await apiResponse.json();

                return data[0];
            } catch (err) {
                console.log(err);
            }
        }));

        setViewedItems(dataItems);
        setLoading(false);
    };

    const renderContent = () => {
        if(viewedItems.length) {
            if (!loading) {
                return (
                    <div className="viewed-items">
                        {viewedItems.map(el => <ProductCard key={el.id} data={el}/>)}
                    </div>
                )
            }
        }
    };

    useEffect(() => {
        getViewedItems(cartItems)
    }, [cartItems]);

    return (
        <div className="viewed">
            <div className="viewed-title">Просмотренное</div>
            {renderContent()}
        </div>
    );
};

export default Viewed;
