import React, {useEffect, useRef, useState} from "react";
import InputMask from "react-input-mask";

const FormInput = ({setDataForm, dataForm, nameForm, errorForm, children, onChanges, type = 'text', ...props}) => {
    const {name, required, ...rest} = props;
    const [focused, setFocused] = useState(!!props.defaultValue);
    const focusedClass = focused ? "focused" : '';
    const error = errorForm[name];
    const errorClass = errorForm[name] ? " form-input__error" : '';
    const inputId = nameForm + "-" + name;
    const inputRef = useRef(null);

    // Костыль из-за бага в react-input-mask
    const setInputRef = (el) => {
        if(!inputRef.current){
            inputRef.current = el;
        }
    };

    const setInitalValue = () => {
        let newDataForm = dataForm;
        newDataForm[inputRef.current.name] = {
            type: inputRef.current.type,
            name: inputRef.current.name,
            value: inputRef.current.value,
            required: inputRef.current.required,
        };

        setDataForm(newDataForm);
    };

    const removeComponentValue = () => {
        let newDataForm = dataForm;
        delete newDataForm[name];

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
            ...newDataForm,
        }));

        onChanges && onChanges(e); // Дополнительная функция для onChange

        setFocused(!!e.target.value.length);
    };

    const RenderInput = () => {
        if(type === 'phone') {
            return <InputMask type={type} className={focusedClass + errorClass} name={name} id={inputId}
                                  required={required} onChange={handleChange} inputRef={(el) => setInputRef(el)} {...rest} />
        } else {
            return <input type={type} className={focusedClass + errorClass} name={name} id={inputId} required={required} onChange={handleChange} ref={inputRef} {...rest} />
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
        return () => {
            removeComponentValue();
        }
    },[]);

    return (
        <div className="form-input">
            {RenderInput()}
            {children && <label htmlFor={inputId}>{children}{required && ' *'}</label>}
            <ErrorText />
        </div>
    )
};

export default FormInput;
