import {Route, Routes} from "react-router-dom"
import Header from './Header';
import MainPage from "./pages/MainPage";
import Catalog from './catalog/Catalog';
import ProductPage from "./catalog/productPage/ProductPage";
import Basket from './basket/Basket';
import Checkout from "./basket/checkout/Checkout";
import Favorite from "./favorite/Favorite";
import Signup from "./authentication/Signup";
import Signin from "./authentication/Signin";
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
            <Header/>
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={<MainPage/>}/>
                        <Route path="/catalog" element={<Catalog/>}/>
                        <Route path="/catalog/:id" element={<ProductPage/>}/>
                        <Route path="/basket" element={<Basket/>}/>
                        <Route path="/basket/checkout/" element={<Checkout/>}/>
                        <Route path="/favorite" element={<Favorite/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/signin" element={<Signin/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;
