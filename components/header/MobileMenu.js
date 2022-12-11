import Link from "next/link";
import AuthBlock from "./AuthBlock";
import React, {useEffect, useState} from "react";

const MobileMenu = ({openMenu, setOpenMenu}) => {
    const [openClass, setOpenClass] = useState("");

    useEffect(() => {
        openMenu ? setOpenClass(" open") : setOpenClass("");
    }, [openMenu]);

    return (
        <>
            <div className={"menu__mobile" + openClass}>
                <div className="menu__mobile-title">Меню</div>
                <ul className="menu__mobile-items">
                    <li className="menu__mobile-item"><Link href="/catalog">Каталог</Link></li>
                    <li className="menu__mobile-item"><Link href="/about">О нас</Link></li>
                    <li className="menu__mobile-item"><Link href="/contact">Контакты</Link></li>
                </ul>
                <div className="menu__mobile-tel">
                    <a href="tel:88005553535" className="menu__mobile-tel__link">8 (800) 555 35 35</a>
                </div>
                <div className="header__auth header__auth--mobile">
                    <AuthBlock />
                </div>
            </div>
            <div className={"menu__mobile-bg" + openClass} onClick={() => setOpenMenu(false)} />
        </>
    )
};

export default MobileMenu;
