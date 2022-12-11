import {Logout} from "../../actions/authentication";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


const AuthBlock = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.users);
    const authId = useSelector((store) => store.authentication.id);
    const [userData, setUserData] = useState({});
    const [nameUser, setNameUser] = useState('');

    useEffect(() => {
        setUserData(users.find(user => user.id === authId));
    }, [authId]);
    useEffect(() => {
        userData && setNameUser(userData.login)
    }, [userData]);

    if(userData) {
        return (
            <>
                <div className="header__auth-login">{nameUser}</div>
                <button onClick={() => dispatch(Logout(authId))} className="btn btn--transparent">Выйти</button>
            </>
        )
    } else {
        return (
            <>
                <Link href="/signup" className="btn">Регистрация</Link>
                <Link href="/signin" className="btn btn--transparent">Войти</Link>
            </>
        )
    }
};

export default AuthBlock;
