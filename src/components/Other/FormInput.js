import {useState} from "react";
import InputMask from 'react-input-mask';

const FormInput = ({nameInput = '', required = false, children, ...props}) => {
    const [focused, setFocused] = useState(false);
    const focusedClass = focused ? "focused" : '';
    const nameId = props.nameForm + "-" + nameInput;

    const renderInput = () => {
        if(nameInput === 'phone') {
            return <InputMask mask="+7 (999) 999-99-99" className={focusedClass} name={nameInput} id={nameId} required={required} onChange={handlerChange} />;
        } else {
            return <input type="text" className={focusedClass} name={nameInput} id={nameId} required={required} onChange={handlerChange} />
        }
    };

    const handlerChange = (e) => {
        setFocused(!!e.target.value.length);
        props.setFormValue({...props.formValue, [e.target.name]: e.target.value})
    };

    return (
        <>
            <div className="form-input">
                {renderInput()}
                {children && <label htmlFor={nameId}>{children}{required && ' *'}</label>}
            </div>
        </>
    )
};

export default FormInput;
