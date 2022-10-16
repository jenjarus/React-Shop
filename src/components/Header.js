import { NavLink, Link } from "react-router-dom"
import {useSelector} from "react-redux";
import {ReactComponent as Logo} from '../images/logo.svg';
import {ReactComponent as IconFavorite} from '../images/icons/favorite.svg';
import {ReactComponent as IconCart} from '../images/icons/cart.svg';

const Header = () => {
    const cartItems = useSelector((store) => store.basket.items);
    const favoriteItems = useSelector((store) => store.favorite.items);
    const cartCount = cartItems.reduce((partialSum, item) => partialSum + item.qty, 0);
    const cartTotal = cartItems.reduce((partialSum, item) => partialSum + (item.price * item.qty), 0);
    const favoriteCount = favoriteItems ? favoriteItems.length : 0;

    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="header-logo">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <div className="header-title">Черное <span className="header-title__highlight">Красное</span></div>
                        <div className="header-tel">
                            <a href="tel:88005553535" className="header-tel__link">8 (800) 555 35 35</a>
                        </div>
                        <div className="header-callback">
                            <a href="#" className="btn">Заказать звонок</a>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="header-nav">
                <div className="container">
                    <div className="header-nav__wrapper">
                        <ul className="header-nav__items">
                            <li className="header-nav__item"><NavLink to="/" end>Каталог</NavLink></li>
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
        </>

    );
};

export default Header;
