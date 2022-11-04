import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Other/Loading";
import Form from "../Other/forms/Form";
import FormInput from "../Other/forms/FormInput";

const Signup = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.users);
    const [loading, setLoading] = useState(false);
    const [valueLogin, setValueLogin] = useState('');
    const [valuePass, setValuePass] = useState('');

    const sendSigninData = (data) => {
        //dispatch(setSignup(data));
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
            <h1 className="page-title">Войти</h1>
            {renderContent()}
        </>
    );

};

export default Signup;
