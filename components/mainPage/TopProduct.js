import React, {useEffect, useState} from "react";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";

const ID_TOP_PRODUCT = [18, 12, 3, 8, 19, 15];

const TopProduct = () => {
    const [loading, setLoading] = useState(false);
    const [topItems, setTopItems] = useState([]);
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

    const getTopItems = async (items) => {
        setLoading(true);
        setTopItems([]);

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

        setTopItems(dataItems);
        setLoading(false);
    };

    const RenderContent = () => {
        if(topItems.length) {
            if (!loading) {
                topItems.length <= 4 ? setInfiniteBool(false) : setInfiniteBool(true);

                return (
                    <div className="top-product">
                        <div className="container">
                            <div className="top-product__title">Клиенты выбирают</div>
                            <Slider className="top-product__items" {...settingsSlider}>
                                {topItems.map(el => <ProductCard key={el.id} data={el}/>)}
                            </Slider></div>
                    </div>
                )
            }
        }
    };

    useEffect(() => {
        getTopItems(ID_TOP_PRODUCT)
    }, []);

    return (
        <RenderContent />
    );
};

export default TopProduct;
