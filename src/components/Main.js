import { Route, Routes } from "react-router-dom"
import Header from './Header';
import Catalog from './catalog/Catalog';
import ProductPage from "./catalog/productPage/ProductPage";
import Basket from './basket/Basket';
import Checkout from "./basket/checkout/Checkout";
import Favorite from "./favorite/Favorite";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from './Other/NotFound';
import Footer from './Footer';

import '../styles/reset.css';
import '../styles/styles.scss';
import React from "react";

const Main = () => {
  return (
    <div className="body">
        <Header />
        <main>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<ProductPage />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/basket/checkout/" element={<Checkout />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default Main;
