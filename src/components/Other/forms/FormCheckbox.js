import React, {useEffect, useRef} from "react";

const FormCheckbox = ({num, setDataForm, dataForm, nameForm, errorForm, children, onChanges, ...props}) => {
    const {name, required, ...rest} = props;
    const error = errorForm[name];
    const errorClass = errorForm[name] ? " form-input__error" : '';
    num ? num = "-" + num : num = '';
    const inputId = nameForm + "-" + name + num;
    let inputRef = useRef(null);

    const setInitalValue = () => {
        let newDataForm = dataForm;
        if (inputRef.current.checked) {
            newDataForm[inputRef.current.name] = {
                type: inputRef.current.type,
                name: inputRef.current.name,
                value: inputRef.current.defaultValue,
                required: inputRef.current.required,
                checked: inputRef.current.checked,
            };

            setDataForm(newDataForm);
        }
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
            checked: e.target.checked,
        };

        setDataForm((prevState) => ({
            ...prevState,
            ...newDataForm,
        }));

        onChanges && onChanges(e); // Дополнительная функция для onChange
    };

    const ErrorText = () => {
        if (error) {
            const errorMsg = error.customText ? error.customText : 'Заполните поле';

            return <span className="form-input__error-text">{errorMsg}</span>
        }
    };

    useEffect(() => {
        setInitalValue();
        return () => {
            removeComponentValue();
        }
    }, []);

    return (
        <div className="form-checkbox">
            <input type="checkbox" className={errorClass} name={name} id={inputId} required={required}
                   onChange={handleChange} ref={inputRef} {...rest} />
            {children && <label htmlFor={inputId}>{children}{required && ' *'}</label>}
            <ErrorText/>
        </div>
    )
};

export default FormCheckbox;
