import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ProductCard from "../../productCard/ProductCard";
import Slider from "react-slick";

const Viewed = () => {
    const cartItems = useSelector((store) => store.viewed.items);
    const [loading, setLoading] = useState(false);
    const [viewedItems, setViewedItems] = useState([]);

    const settingsSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 499,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

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
                    <Slider className="viewed-items" {...settingsSlider}>
                        {viewedItems.map(el => <ProductCard key={el.id} data={el}/>)}
                    </Slider>
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
