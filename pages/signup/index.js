import React, {useState} from "react";
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {setSignup} from "../../actions/users";
import {Login} from "../../actions/authentication";
import Loading from "../../components/Other/Loading";
import FormInput from "../../components/Other/forms/FormInput";
import Form from "../../components/Other/forms/Form";

const Signup = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.users);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [valueLogin, setValueLogin] = useState('');
    const [valuePass, setValuePass] = useState('');
    const [valuePassConf, setValuePassConf] = useState('');

    const sendSignupData = (data) => {
        data['id'] = new Date().getTime();
        delete data["confirm-password"];

        dispatch(setSignup(data));
        dispatch(Login(data['id']));

        setTimeout(() => {
            router.replace('/');
        }, 3000)
    };

    const successSignup = () => {
        return (
            <div className="form-success form-success--signup">
                <div className="form-success__title">Регистрация прошла успешно</div>
                <div className="form-success__subtitle">Вы успешно авторизовались</div>
            </div>
        )
    };

    const validateSignup = () => {
        return Object.assign({},
            validateConfirmPassword(),
            checkDuplicateLogin()
        );
    };

    const validateConfirmPassword = () => {
        if (valuePass && valuePass !== valuePassConf) {
            return {
                "confirm-password": {
                    name: "confirm-password",
                    error: true,
                    customText: "Пароли не совпадают",
                }
            };
        }
    };

    const checkDuplicateLogin = () => {
        if (valueLogin && users.find(user => user.login === valueLogin)) {
            return {
                "login": {
                    name: "login",
                    error: true,
                    customText: "Логин уже используется",
                }
            };
        }
    };

    const renderContent = () => {
        if (!loading) {
            return (
                <div className="signup">
                    <Form
                        nameForm="signup"
                        successText={successSignup}
                        sendMessage={sendSignupData}
                        customErrorFunc={validateSignup}
                        textBtn="Зарегистрироваться"
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
                        <FormInput
                            type="password"
                            name="confirm-password"
                            required={true}
                            onChanges={(e) => setValuePassConf(e.target.value)}
                        >
                            Подтвердите пароль
                        </FormInput>
                        <FormInput
                            name="name"
                        >
                            Ваше ФИО
                        </FormInput>
                        <FormInput
                            type="phone"
                            name="phone"
                            mask="+7 (999) 999-99-99"
                            required={true}
                        >
                            Ваш телефон
                        </FormInput>
                        <FormInput
                            type="email"
                            name="email"
                            required
                        >
                            Ваш e-mail
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
            <h1 className="page-title">Регистрация</h1>
            {renderContent()}
        </>
    );
};

export default Signup;
