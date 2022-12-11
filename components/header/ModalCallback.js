import ModalWindow from "../Other/ModalWindow";
import Form from "../Other/forms/Form";
import FormInput from "../Other/forms/FormInput";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const ModalCallback = ({openCallback, setOpenCallback}) => {
    const users = useSelector((store) => store.users.users);
    const authId = useSelector((store) => store.authentication.id);
    const [userData, setUserData] = useState({});
    const [authPhone, setAuthPhone] = useState('');

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

    useEffect(() => {
        setUserData(users.find(user => user.id === authId));
    }, [authId]);
    useEffect(() => {
        userData && setAuthPhone(userData.phone);
    }, [userData]);

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

export default ModalCallback;
