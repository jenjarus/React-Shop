import React, {useEffect, useState} from "react";
import {NavLink, Link, useLocation } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {Logout} from "../actions/authentication";
import {ReactComponent as Logo} from '../images/logo.svg';
import {ReactComponent as IconFavorite} from '../images/icons/favorite.svg';
import {ReactComponent as IconCart} from '../images/icons/cart.svg';
import {ReactComponent as IconCallback} from '../images/icons/phone-call.svg';
import {ReactComponent as IconMenu} from '../images/icons/menu.svg';
import ModalWindow from "./Other/ModalWindow";
import Form from "./Other/forms/Form";
import FormInput from "./Other/forms/FormInput";

const Header = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.basket.items);
    const favoriteItems = useSelector((store) => store.favorite.items);
    const users = useSelector((store) => store.users.users);
    const authId = useSelector((store) => store.authentication.id);
    const userData = authId ? users.find(user => user.id === authId) : {};
    const cartCount = cartItems.reduce((partialSum, item) => partialSum + item.qty, 0);
    const cartTotal = cartItems.reduce((partialSum, item) => partialSum + (item.price * item.qty), 0);
    const favoriteCount = favoriteItems ? favoriteItems.length : 0;
    const [openCallback, setOpenCallback] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation()

    const clickCallback = (e) => {
        e.preventDefault();
        setOpenCallback(true);
    };

    const ModalCallback = () => {
        const authPhone = authId ? userData.phone : '';

        return (
            <ModalWindow
                classModal="modal--callback"
                title="Заказать звонок"
                isOpen={openCallback}
                closeModal={() => setOpenCallback(false)}
            >
                <Form
                    nameForm="callback"
                    sendMessage={sendMessageCallbackForm}
                >
                    <FormInput
                        name="name"
                    >
                        Ваше имя
                    </FormInput>
                    <FormInput
                        type="phone"
                        name="phone"
                        mask="+7 (999) 999-99-99"
                        required={true}
                        defaultValue={authPhone}
                    >
                        Ваш телефон
                    </FormInput>
                </Form>
            </ModalWindow>
        )
    };

    const sendMessageCallbackForm = (data) => {
        const msgName = data.name ? `Имя: ${data.name}` : '';
        const msgPhone = data.phone ? `Телефон: ${data.phone}` : '';
        const msgText = `
Представим что это пришло на почту

Форма "Заказать звонок"
${msgName}
${msgPhone}
        `;

        console.log(msgText);
    };

    const authBlock = () => {
        if(authId) {
            const nameUser = userData.login;

            return (
                <>
                    <div className="header__auth-login">{nameUser}</div>
                    <button onClick={() => dispatch(Logout(authId))} className="btn btn--transparent">Выйти</button>

                </>
            )
        } else {
            return (
                <>
                    <NavLink to="/signup" className="btn">Регистрация</NavLink>
                    <NavLink to="/signin" className="btn btn--transparent">Войти</NavLink>
                </>
            )
        }
    };

    const mobileMenu = () => {
        const openClass = openMenu ? " open" : "";

        return (
            <>
                <div className={"menu__mobile" + openClass}>
                    <div className="menu__mobile-title">Меню</div>
                    <ul className="menu__mobile-items">
                        <li className="menu__mobile-item"><NavLink to="/catalog">Каталог</NavLink></li>
                        <li className="menu__mobile-item"><NavLink to="/about">О нас</NavLink></li>
                        <li className="menu__mobile-item"><NavLink to="/contact">Контакты</NavLink></li>
                    </ul>
                    <div className="menu__mobile-tel">
                        <a href="tel:88005553535" className="menu__mobile-tel__link">8 (800) 555 35 35</a>
                    </div>
                    <div className="header__auth header__auth--mobile">
                        {authBlock()}
                    </div>
                </div>
                <div className={"menu__mobile-bg" + openClass} onClick={() => setOpenMenu(false)} />
            </>
        )
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
                            <Link to="/">
                                <Logo/>
                            </Link>
                        </div>
                        <div className="header-title">Черное <span className="header-title__highlight">Красное</span>
                        </div>
                        <div className="header-tel">
                            <a href="tel:88005553535" className="header-tel__link">8 (800) 555 35 35</a>
                        </div>
                        <div className="header__auth">
                            {authBlock()}
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
                            <li className="header-nav__item"><NavLink to="/catalog">Каталог</NavLink></li>
                            <li className="header-nav__item"><NavLink to="/about">О нас</NavLink></li>
                            <li className="header-nav__item"><NavLink to="/contact">Контакты</NavLink></li>
                        </ul>
                        <div className="header-nav__tabs">
                            <div className="header-nav__tab header-nav__tab--favorite">
                                <Link to="/favorite" className="header-nav__tab-link">
                                    <IconFavorite/>{favoriteCount}
                                </Link>
                            </div>
                            <div className="header-nav__tab header-nav__tab--cart">
                                <Link to="/basket" className="header-nav__tab-link">
                                    <IconCart/>({cartCount}) {cartTotal} $
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <ModalCallback/>
            {mobileMenu()}
        </>
    );
};

export default Header;
