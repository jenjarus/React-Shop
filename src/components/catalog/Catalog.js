import React, {useEffect, useState} from 'react';
import ProductCard from './productCard/ProductCard';
import Loading from '../Other/Loading';

const Catalog = () => {
    const [loading, setLoading] = useState(true);
    const [catalogItems, setCatalogItems] = useState([]);

    const getCatalogData = async () => {
        setLoading(true);

        try {
            const url = `https://api.punkapi.com/v2/beers?page=1&per_page=20`;
            const apiResponse = await fetch(url);
            const data = await apiResponse.json();

            setCatalogItems(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const renderContent = () => {
        if (!loading) {
            return (
                <div className="catalog-items">
                    {catalogItems.map(el => <ProductCard key={el.id} data={el}/>)}
                </div>
            )
        } else {
            return <Loading/>
        }
    };

    useEffect(() => {
        getCatalogData();
    }, []);

    return (
        <>
            <h1 className="page-title">Каталог</h1>
            {renderContent()}
        </>
    );
};

export default Catalog;
