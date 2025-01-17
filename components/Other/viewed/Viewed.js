import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ProductCard from "../../productCard/ProductCard";
import Slider from "react-slick";

const Viewed = () => {
    const cartItems = useSelector((store) => store.viewed.items);
    const [loading, setLoading] = useState(false);
    const [viewedItems, setViewedItems] = useState([]);
    const [infiniteBool, setInfiniteBool] = useState(true);

    const settingsSlider = {
        dots: true,
        arrows: false,
        infinite: infiniteBool,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                const url = `https://punkapi.online/v3/beers/${item}`;
                const apiResponse = await fetch(url);
                const data = await apiResponse.json();

                return data;
            } catch (err) {
                console.log(err);
            }
        }));

        setViewedItems(dataItems);
        setLoading(false);
    };

    const RenderContent = () => {
        if(viewedItems.length) {
            if (!loading) {
                viewedItems.length <= 4 ? setInfiniteBool(false) : setInfiniteBool(true);

                return (
                    <div className="viewed">
                        <div className="viewed-title">Просмотренное</div>
                        <Slider className="viewed-items" {...settingsSlider}>
                            {viewedItems.map(el => <ProductCard key={el.id} data={el}/>)}
                        </Slider>
                    </div>
                )
            }
        }
    };

    useEffect(() => {
        getViewedItems(cartItems)
    }, [cartItems]);

    return (
        <RenderContent />
    );
};

export default Viewed;
