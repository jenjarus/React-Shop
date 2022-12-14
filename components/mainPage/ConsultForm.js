import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Form from "../Other/forms/Form";
import FormInput from "../Other/forms/FormInput";
import FormTextarea from "../Other/forms/FormTextarea";
import FormDiv from "../Other/forms/FormDiv";

const ConsultForm = () => {
    const users = useSelector((store) => store.users.users);
    const authId = useSelector((store) => store.authentication.id);
    const [userData, setUserData] = useState({});
    const [authPhone, setAuthPhone] = useState('');
    const [authEmail, setAuthEmail] = useState('');

    const sendMessageConsultForm = (data) => {
        const msgName = data.name ? `Имя: ${data.name}` : '';
        const msgPhone = data.phone ? `Телефон: ${data.phone}` : '';
        const msgEmail = data.email ? `Email: ${data.email}` : '';
        const msgQuest = data.question ? `Вопрос: ${data.question}` : '';
        const msgText = `
Представим что это пришло на почту

Форма "Заказать консультация"
${msgName}
${msgPhone}
${msgEmail}
-------
${msgQuest}
        `;

        console.log(msgText);
    };

    useEffect(() => {
        setUserData(users.find(user => user.id === authId));
    }, [authId]);
    useEffect(() => {
        if (userData) {
            setAuthPhone(userData.phone);
            setAuthEmail(userData.email);
        }
    }, [userData]);

    const RenderContent = () => {
            return (
                <div className="form__consult">
                    <div className="form__consult-wrapper">
                        <div className="form__consult-title">Есть вопросы - получите консультацию</div>
                        <Form
                            nameForm="consult"
                            sendMessage={sendMessageConsultForm}
                        >
                            <FormDiv classes="form__consult-line">
                                <FormInput
                                    name="name"
                                >
                                    Ваше имя
                                </FormInput>
                                <FormInput
                                    type="email"
                                    name="email"
                                    required
                                    defaultValue={authEmail}
                                >
                                    Ваш e-mail
                                </FormInput>
                                <FormInput
                                    type="phone"
                                    name="phone"
                                    mask="+7 (999) 999-99-99"
                                    defaultValue={authPhone}
                                >
                                    Ваш телефон
                                </FormInput>
                            </FormDiv>
                            <FormDiv classes="form__consult-line">
                                <FormTextarea
                                    name="question"
                                    required
                                    rows={3}
                                >
                                    Вопрос
                                </FormTextarea>
                            </FormDiv>
                        </Form>
                    </div>
                </div>
            )
    };

    return (
        <>
            <RenderContent />
        </>
    )
};

export default ConsultForm;
