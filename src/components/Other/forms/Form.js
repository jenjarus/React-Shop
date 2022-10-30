import React, {useState} from "react";
import {NAME_COMPONENTS} from "./constants"; // Массив созданных компонентов формы для передачи пропсов

const Form = ({nameForm = '', textBtn = 'Отправить', successText, sendMessage,  children}) => {
    const [success, setSuccess] = useState(false);
    const [errorForm, setErrorForm] = useState(false);
    const [dataForm, setDataForm] = useState({});
    successText = successText ? successText : <SuccessText />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(e.target)) {
            sendMessage(dataForm);
            setDataForm({});
            setSuccess(true);
        }
    };

    const validateForm = (target) => {
        let formData = {};
        let errors = {};
        let cloneDataForm = dataForm.length ? dataForm : formData;
        let isValid = true;

        if (!dataForm.length) {
            for (let i = 0; i < target.length; i++) {
                if (target.elements[i].type !== 'submit') {
                    formData[target.elements[i].getAttribute("name")] = {
                        type: target.elements[i].type,
                        name: target.elements[i].name,
                        value: target.elements[i].value,
                        required: target.elements[i].required,
                        checked: target.elements[i].checked,
                    };
                }
            }
        }

        for (let key in cloneDataForm) {
            if (cloneDataForm[key].required) {
                if (cloneDataForm[key].value.length <= 0) {
                    isValid = false;
                    errors[cloneDataForm[key].name] = {
                        name: cloneDataForm[key].name,
                        error: true,
                    };
                } else if (cloneDataForm[key].name === 'phone' && cloneDataForm[key].value.length !== 18) {
                    isValid = false;
                    errors[cloneDataForm[key].name] = {
                        name: cloneDataForm[key].name,
                        error: true,
                        customText: "Заполните поле полностью",
                    };
                } else if (cloneDataForm[key].type === 'checkbox' && cloneDataForm[key].name === 'policy' && cloneDataForm[key].checked !== true) {
                    isValid = false;
                    errors[cloneDataForm[key].name] = {
                        name: cloneDataForm[key].name,
                        error: true,
                        customText: "Подтвердите свое согласие",
                    };
                }
            }
        }

        setErrorForm(errors);

        return isValid;
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && (NAME_COMPONENTS.find(el => el === child.type.name))) {
            return React.cloneElement(child, {setDataForm, dataForm, nameForm, errorForm});
        }
        return child;
    });

    function SuccessText() {
        return (
            <div className="form-success">
                <div className="form-success__title">Сообщение успешно отправленно</div>
                <div className="form-success__text">Мы свяжемся с вами в ближайшее время.</div>
            </div>
        )
    }

    const RenderContent = () => {
        if (success) {
            return successText
        } else {
            return (
                <form action="#" method="post" className={nameForm + "-form"} onSubmit={handleSubmit} noValidate>
                    {childrenWithProps}
                    <div className={`form-submit ${nameForm}--submit`}>
                        <button type="submit" className={`btn ${nameForm}-btn`}>{textBtn}</button>
                    </div>
                </form>
            )
        }
    };

    return RenderContent();

};

export default Form;
