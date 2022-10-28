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
            newDataForm}));

        setFocused(!!e.target.value.length);
    };

    const renderInput = () => {
        if(nameInput === 'phone') {
                return <InputMask type="text" mask="+7 (999) 999-99-99" className={errorClass + focusedClass} name={nameInput} id={nameId} required={required} onChange={handleChange} />;
        } else {
            return <input type="text" className={errorClass + focusedClass} name={nameInput} id={nameId} required={required} onChange={handleChange} />
        }
    };

    return (
        <>
            <div className="form-input">
                {renderInput()}
                {children && <label htmlFor={nameId}>{children}{required && ' *'}</label>}
                {error && <span className="form-input__error-text">{error.customText ? error.customText : 'Заполните поле'}</span>}
            </div>
        </>
    )
};

export default FormInput;
