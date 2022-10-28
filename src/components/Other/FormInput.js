import {useState} from "react";
import InputMask from 'react-input-mask';

const FormInput = ({nameInput = '', required = false, children, setDataForm, dataForm, nameForm, errorForm}) => {
    const [focused, setFocused] = useState(false);
    const focusedClass = focused ? "focused" : '';
    const error = errorForm[nameInput];
    const errorClass = errorForm[nameInput] ? " form-input__error" : '';
    const nameId = nameForm + "-" + nameInput;


    const handleChange = (e) => {
        let newDataForm = dataForm;
        newDataForm[e.target.name] = {
            name: e.target.name,
            value: e.target.value,
            required: e.target.required,
        };

        setDataForm((prevState) => ({
            ...prevState,
            newDataForm,
        }));

        setFocused(!!e.target.value.length);
    };

    const RenderInput = () => {
        if(nameInput === 'phone') {
                return <InputMask type="text" mask="+7 (999) 999-99-99" className={errorClass + focusedClass} name={nameInput} id={nameId} required={required} onChange={handleChange} />;
        } else {
            return <input type="text" className={errorClass + focusedClass} name={nameInput} id={nameId} required={required} onChange={handleChange} />
        }
    };

    const ErrorText = () => {
        if(error) {
            const errorMsg = error.customText ? error.customText : 'Заполните поле';

            return <span className="form-input__error-text">{errorMsg}</span>
        }
    };

    return (
        <div className="form-input">
            {RenderInput()}
            {children && <label htmlFor={nameId}>{children}{required && ' *'}</label>}
            <ErrorText />
        </div>
    )
};

export default FormInput;
