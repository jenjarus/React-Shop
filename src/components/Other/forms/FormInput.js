import {useState} from "react";
import InputMask from 'react-input-mask';

const FormInput = ({setDataForm, dataForm, nameForm, errorForm, children, onChanges, ...props}) => {
    const [focused, setFocused] = useState(false);
    const focusedClass = focused ? "focused" : '';
    const error = errorForm[props.name];
    const errorClass = errorForm[props.name] ? " form-input__error" : '';
    const inputId = nameForm + "-" + props.name;
    (!props.type) && (props.type = 'text');

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

    /*const RenderInput = () => {
        if(props.name === 'phone') {
                return <input className={errorClass + focusedClass} id={inputId} onChange={handleChange} {...props} />;
        } else {
            return <InputMask className={errorClass + focusedClass} id={inputId} onChange={handleChange} {...props} />
        }
    };*/

    const ErrorText = () => {
        if(error) {
            const errorMsg = error.customText ? error.customText : 'Заполните поле';

            return <span className="form-input__error-text">{errorMsg}</span>
        }
    };

    return (
        <div className="form-input">
            <InputMask className={errorClass + focusedClass} id={inputId} onChange={handleChange} {...props} />
            {children && <label htmlFor={inputId}>{children}{props.required && ' *'}</label>}
            <ErrorText />
        </div>
    )
};

export default FormInput;
