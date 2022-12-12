import React, {useState} from "react";
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {Login} from "../../actions/authentication";
import Loading from "../../components/Other/Loading";
import Form from "../../components/Other/forms/Form";
import FormInput from "../../components/Other/forms/FormInput";
import Head from "next/head";

const Signup = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.users);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [valueLogin, setValueLogin] = useState('');
    const [valuePass, setValuePass] = useState('');

    const sendSigninData = (data) => {
        const id = users.find(user => user.login === data.login).id;

        dispatch(Login(id));

        setTimeout(() => {
            router.replace('/');
        }, 3000)
    };

    const successSignin = () => {
        return (
            <div className="form-success form-success--signup">
                <div className="form-success__title">Вы авторизовались</div>
            </div>
        )
    };

    const validateSignin = () => {
        return Object.assign({},
            checkPassword(),
            checkLogin()
        );
    };

    const checkLogin = () => {
        if (valueLogin && !(users.find(user => user.login === valueLogin))) {
            return {
                "login": {
                    name: "login",
                    error: true,
                    customText: "Данный логин отсутствует",
                }
            };
        }
    };

    const checkPassword = () => {
        // Тут должна быть проверка хеша пароля, но...
        if (valuePass && !(users.find(user => user.password === valuePass))) {
            return {
                "password": {
                    name: "password",
                    error: true,
                    customText: "Неправильный пароль",
                }
            };
        }
    };

    const renderContent = () => {
        if (!loading) {
            return (
                <div className="signin">
                    <Form
                        nameForm="signin"
                        successText={successSignin}
                        sendMessage={sendSigninData}
                        customErrorFunc={validateSignin}
                        textBtn="Войти"
                    >
                        <FormInput
                            name="login"
                            required={true}
                            onChanges={(e) => setValueLogin(e.target.value)}
                        >
                            Логин
                        </FormInput>
                        <FormInput
                            type="password"
                            name="password"
                            required={true}
                            onChanges={(e) => setValuePass(e.target.value)}
                        >
                            Пароль
                        </FormInput>
                    </Form>
                </div>
            )
        } else {
            return <Loading/>
        }
    };

    return (
        <>
            <Head>
                <title>Войти | Черное красное - магазин пива</title>
                <meta name="description" content="Черное красное - магазин пива" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
            </Head>
            <h1 className="page-title">Войти</h1>
            {renderContent()}
        </>
    );

};

export default Signup;
