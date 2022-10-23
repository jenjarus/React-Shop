import React, {useState} from "react";

const Form = ({nameForm = '', textBtn = 'Отправить', successText, children}) => {
    const [success, setSuccess] = useState(false);
    const [formValue, setFormValue] = useState({});
    successText = successText ? successText : (
        <div className="form-success">
            <div className="form-success__title">Сообщение успешно отправленно</div>
            <div className="form-success__text">Мы свяжемся с вами в ближайшее время.</div>
        </div>);

    const handlerSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        console.log(formValue);
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {setFormValue, formValue, nameForm});
        }
        return child;
    });

    const renderSuccessInfo = () => {
        if(success) {
            return successText
        } else {
            return (
                <form action="#" method="post" className={nameForm + "-form"} onSubmit={handlerSubmit}>
                    {childrenWithProps}
                    <div className={`form-submit ${nameForm}--submit`}>
                        <button type="submit" className={`btn ${nameForm}-btn`}>{textBtn}</button>
                    </div>
                </form>
            )
        }
    };

    return renderSuccessInfo();

};

export default Form;
