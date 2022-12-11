import React, {useEffect, useState} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'
import {useSelector} from "react-redux";
import Logo from '../images/logo.svg';
import IconFavorite from '../images/icons/favorite.svg';
import IconCart from '../images/icons/cart.svg';
import IconCallback from '../images/icons/phone-call.svg';
import IconMenu from '../images/icons/menu.svg';
import AuthBlock from "./header/AuthBlock";
import ModalCallback from "./header/ModalCallback";
import MobileMenu from "./header/MobileMenu";

const Header = () => {
    const cartItems = useSelector((store) => store.basket.items);
    const favoriteItems = useSelector((store) => store.favorite.items);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const [openCallback, setOpenCallback] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const location = useRouter();

    useEffect(() => {
        setFavoriteCount(favoriteItems.length);
    }, [favoriteItems]);
    useEffect(() => {
        setCartTotal(cartItems.reduce((partialSum, item) => partialSum + (item.price * item.qty), 0));
        setCartCount(cartItems.reduce((partialSum, item) => partialSum + item.qty, 0));
    }, [cartItems]);

    const clickCallback = (e) => {
        e.preventDefault();
        setOpenCallback(true);
    };

    useEffect(() => {
        setOpenMenu(false);
    }, [location]);

    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="header-logo">
                            <Link href="/">
                                <Logo/>
                            </Link>
                        </div>
                        <div className="header-title">Черное <span className="header-title__highlight">Красное</span>
                        </div>
                        <div className="header-tel">
                            <a href="tel:88005553535" className="header-tel__link">8 (800) 555 35 35</a>
                        </div>
                        <div className="header__auth">
                            <AuthBlock />
                        </div>
                        <div className="header-callback">
                            <a href="#" className="btn" onClick={clickCallback}>
                                <span className="header-callback__text">Заказать звонок</span>
                                <IconCallback />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="header-nav">
                <div className="container">
                    <div className="header-nav__wrapper">
                        <div className="header-nav__menu-btn">
                            <button className="btn" onClick={() => setOpenMenu(true)}><IconMenu /> Меню</button>
                        </div>
                        <ul className="header-nav__items">
                            <li className="header-nav__item"><Link href="/catalog">Каталог</Link></li>
                            <li className="header-nav__item"><Link href="/about">О нас</Link></li>
                            <li className="header-nav__item"><Link href="/contact">Контакты</Link></li>
                        </ul>
                        <div className="header-nav__tabs">
                            <div className="header-nav__tab header-nav__tab--favorite">
                                <Link href="/favorite" className="header-nav__tab-link">
                                    <IconFavorite/>{favoriteCount}
                                </Link>
                            </div>
                            <div className="header-nav__tab header-nav__tab--cart">
                                <Link href="/basket" className="header-nav__tab-link">
                                    <IconCart/>({cartCount}) {cartTotal} $
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <ModalCallback
                openCallback={openCallback}
                setOpenCallback={setOpenCallback}
            />
            <MobileMenu
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
        </>
    );
};

export default Header;
