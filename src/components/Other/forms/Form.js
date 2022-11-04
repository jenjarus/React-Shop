import React, {useState} from "react";

const Form = ({nameForm = '', textBtn = 'Отправить', successText, sendMessage, children}) => {
    const [success, setSuccess] = useState('');
    const [errorForm, setErrorForm] = useState({});
    const [dataForm, setDataForm] = useState({});
    successText = successText ? successText() : <SuccessText/>;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendMessage(dataForm);
            setDataForm({});
            setSuccess(true);
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;
        let cloneDataForm = dataForm;
        const regEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        for (let key in cloneDataForm) {
            if (cloneDataForm[key].required) {
                if (cloneDataForm[key].value.length <= 0) {
                    isValid = false;
                    errors[cloneDataForm[key].name] = {
                        name: cloneDataForm[key].name,
                        error: true,
                    };
                } else if (cloneDataForm[key].type === 'phone' && cloneDataForm[key].value.length !== 18) {
                    isValid = false;
                    errors[cloneDataForm[key].name] = {
                        name: cloneDataForm[key].name,
                        error: true,
                        customText: "Заполните поле полностью",
                    };
                } else if (cloneDataForm[key].type === 'email' && !regEmail.test(cloneDataForm[key].value)) {
                    isValid = false;
                    errors[cloneDataForm[key].name] = {
                        name: cloneDataForm[key].name,
                        error: true,
                        customText: "Напишите почту. Пример: abc@abc.ru",
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
        if (React.isValidElement(child)) {
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
