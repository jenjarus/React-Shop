import React, {useEffect, useState} from 'react';
import ProductCard from './productCard/ProductCard';
import Loading from '../Other/Loading';
import Sorting from "./Sorting/Sorting";
import Filters from "./Filter/Filters";

const arrFilters = {
    abv: [],
    ebc: [],
    ibu: [],
};

const Catalog = () => {
    const [loading, setLoading] = useState(true);
    const [catalogItems, setCatalogItems] = useState([]);
    const [sortFlag, setSortFlag] = useState('nameASC');
    const [filtersSelect, setFiltersSelect] = useState(arrFilters);

    // Фильтрация выводимого товара
    const filterCatalogItems = (data) => {
        for (let key in filtersSelect) {
            if (Object.keys(filtersSelect[key]).length !== 0) {
                data = data.filter(el => filtersSelect[key].includes(el[key]));
            }
        }

        return data;
    };

    // Сортировка выводимого товара
    const sortFunc = () => {
        let sortFunc;
        const sortNameASC = (prev, next) => {
            const prevSort = prev.name;
            const nextSort = next.name;

            if (prevSort > nextSort) {
                return 1;
            } else if (prevSort < nextSort) {
                return -1;
            }
            return 0;
        };
        const sortNameDESC = (prev, next) => {
            const prevSort = prev.name;
            const nextSort = next.name;

            if (nextSort > prevSort) {
                return 1;
            } else if (nextSort < prevSort) {
                return -1;
            }
            return 0;
        };
        const sortPriceASC = (prev, next) => prev.ibu - next.ibu;
        const sortPriceDESC = (prev, next) => next.ibu - prev.ibu;

        // Выбираем функцию для сортировки
        switch (sortFlag) {
            case 'nameASC':
                sortFunc = sortNameASC;
                break;
            case 'nameDESC':
                sortFunc = sortNameDESC;
                break;
            case 'priceASC':
                sortFunc = sortPriceASC;
                break;
            case 'priceDESC':
                sortFunc = sortPriceDESC;
                break;
            default:
                sortFunc = sortNameASC;
                break;
        }

        return sortFunc;
    };

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
            const filtersCatalogItems = filterCatalogItems(catalogItems);
            const sortsCatalogItems = filtersCatalogItems.sort(sortFunc());

            return (
                <div className="catalog">
                    <Filters data={catalogItems} filtersSelect={filtersSelect} setFiltersSelect={setFiltersSelect} />
                    <div className="catalog-content">
                        <Sorting sortFlag={sortFlag} setSortFlag={setSortFlag}/>
                        <div className="catalog-items">
                            {sortsCatalogItems.length ? sortsCatalogItems.map(el => <ProductCard key={el.id} data={el}/>) : <p>Товаров не найдено</p>}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Loading/>
        }
    };

    useEffect(() => {
        getCatalogData();
    }, [catalogItems.length]);

    return (
        <>
            <h1 className="page-title">Каталог</h1>
            {renderContent()}
        </>
    );
};

export default Catalog;
