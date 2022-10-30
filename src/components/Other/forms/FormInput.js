import React, {useEffect, useRef, useState} from "react";
import { PatternFormat } from 'react-number-format';

const FormInput = ({setDataForm, dataForm, nameForm, errorForm, children, onChanges, ...props}) => {
    const [focused, setFocused] = useState(false);
    const focusedClass = focused ? "focused" : '';
    const error = errorForm[props.name];
    const errorClass = errorForm[props.name] ? " form-input__error" : '';
    const inputId = nameForm + "-" + props.name;
    (!props.type) && (props.type = 'text');
    let inputRefs = useRef(null);

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
        if(props.name === 'phone') {
            return <PatternFormat className={focusedClass + errorClass} id={inputId} onChange={handleChange} getInputRef={inputRefs} {...props} />
        } else {
            return <input className={focusedClass + errorClass} id={inputId} onChange={handleChange} ref={inputRefs} {...props} />
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
            {children && <label htmlFor={inputId}>{children}{props.required && ' *'}</label>}
            <ErrorText />
        </div>
    )
};

export default FormInput;