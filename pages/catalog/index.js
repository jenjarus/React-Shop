import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initPriceFilter} from "../../actions/catalog";
import ProductCard from '../../components/productCard/ProductCard';
import Loading from '../../components/Other/Loading';
import Sorting from "../../components/Sorting/Sorting";
import Filters from "../../components/Filter/Filters";

const Catalog = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [catalogItems, setCatalogItems] = useState([]);
    const [openSidebar, setOpenSidebar] = useState(false);
    const sortFlag = useSelector((store) => store.catalog.sortFlag);
    const filtersSelect = useSelector((store) => store.catalog.filters);
    const minState = useSelector((store) => store.catalog.minPrice);
    const maxState = useSelector((store) => store.catalog.maxPrice);

    // Фильтрация выводимого товара
    const filterCatalogItems = (data) => {
        data = data.filter(el => el['ibu'] >= minState && el['ibu'] <= maxState);

        for (let key in filtersSelect) {
            if (Object.keys(filtersSelect[key]).length !== 0) {
                data = data.filter(el => filtersSelect[key].includes(el[key] + ''));
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

            const arrPrice = data.map(el => +el['ibu']);
            dispatch(initPriceFilter(Math.min(...arrPrice), Math.max(...arrPrice)));

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
                    <Filters
                        data={catalogItems}
                        openSidebar={openSidebar}
                        setOpenSidebar={setOpenSidebar}
                    />
                    <div className="catalog-content">
                        <Sorting />
                        <button className="btn btn--filter__mobile" onClick={() => setOpenSidebar(!openSidebar)}>Фильтр</button>
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
