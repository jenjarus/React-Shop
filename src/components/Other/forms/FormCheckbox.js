import {useEffect, useRef} from "react";

const FormCheckbox = ({num, setDataForm, dataForm, nameForm, errorForm, children, onChanges, ...props}) => {
    const error = errorForm[props.name];
    const errorClass = errorForm[props.name] ? " form-input__error" : '';
    const inputId = nameForm + "-" + props.name + num;
    let inputRef = useRef(null);
    // num - Временно !!!!!!!

    const setInitalValue = () => {
        let newDataForm = dataForm;
        if(inputRef.current.checked) {
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
            newDataForm,
        }));

        onChanges && onChanges(e); // Дополнительная функция для onChange
    };

    const ErrorText = () => {
        if(error) {
            const errorMsg = error.customText ? error.customText : 'Заполните поле';

            return <span className="form-input__error-text">{errorMsg}</span>
        }
    };

    useEffect(() => {
        setInitalValue();
    },[inputRef]);

    return (
        <div className="form-checkbox">
            <input type="checkbox" className={errorClass} id={inputId} onChange={handleChange} ref={inputRef} {...props} />
            {children && <label htmlFor={inputId}>{children}{props.required && ' *'}</label>}
            <ErrorText />
        </div>
    )
};

export default FormCheckbox;
