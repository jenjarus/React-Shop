import React, {useEffect, useRef, useState} from "react";
import { PatternFormat } from 'react-number-format';

const FormInput = ({setDataForm, dataForm, nameForm, errorForm, children, onChanges, type = 'text', ...props}) => {
    const {name, required, ...rest} = props;
    const [focused, setFocused] = useState(false);
    const focusedClass = focused ? "focused" : '';
    const error = errorForm[name];
    const errorClass = errorForm[name] ? " form-input__error" : '';
    const inputId = nameForm + "-" + name;
    const inputRefs = useRef(null);

    const setInitalValue = () => {
        let newDataForm = dataForm;
        newDataForm[inputRefs.current.name] = {
            type: inputRefs.current.type,
            name: inputRefs.current.name,
            value: inputRefs.current.value,
            required: inputRefs.current.required,
        };

        setDataForm(newDataForm);
    };

    const handleChange = (e) => {
        let newDataForm = dataForm;
        newDataForm[e.target.name] = {
            type: e.target.type,
            name: e.target.name,
            value: e.target.value,
            required: e.target.required,
        };

        setDataForm((prevState) => ({
            ...prevState,
            newDataForm,
        }));

        onChanges && onChanges(e); // Дополнительная функция для onChange

        setFocused(!!e.target.value.length);
    };

    const RenderInput = () => {
        if(name === 'phone') {
            return <PatternFormat type={type} className={focusedClass + errorClass} name={name} id={inputId}
                                  required={required} onChange={handleChange} getInputRef={inputRefs} {...rest} />
        } else {
            return <input type={type} className={focusedClass + errorClass} name={name} id={inputId} required={required} onChange={handleChange} ref={inputRefs} {...rest} />
        }
    };

    const ErrorText = () => {
        if(error) {
            const errorMsg = error.customText ? error.customText : 'Заполните поле';

            return <span className="form-input__error-text">{errorMsg}</span>
        }
    };

    useEffect(() => {
        setInitalValue();
    },[inputRefs]);

    return (
        <div className="form-input">
            {RenderInput()}
            {children && <label htmlFor={inputId}>{children}{required && ' *'}</label>}
            <ErrorText />
        </div>
    )
};

export default FormInput;
