import {useState} from "react";
import InputMask from 'react-input-mask';

const FormInput = ({nameInput = '', required = false, children, setFormValue, formValue, nameForm, setErrorValid}) => {
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState(false);
    const focusedClass = focused ? "focused" : '';
    const errorClass = error ? " form-input__error" : '';
    const nameId = nameForm + "-" + nameInput;

    /*const validInput = (that) => {
        if(required) {
            console.log(that.value.trim().length);
            if(nameInput === 'phone' && that.value.trim().length !== 18) {
                setErrorValid(true);
                setError(true);
                //return (<span className="form-input__error-text">Заполните поле {that.value.length}</span>)
            } else {
                setErrorValid(false);
                setError(false);
                //return (<span className="form-input__error-text">Заполните поле</span>)
            }
        } else {
            setErrorValid(false);
            setError(false);
        }
    };*/

    const renderInput = () => {
        if(nameInput === 'phone') {
                return <InputMask type="text" mask="+7 (999) 999-99-99" className={focusedClass+errorClass} name={nameInput} id={nameId} required={required} onChange={handlerChange} />;
        } else {
            return <input type="text" className={focusedClass} name={nameInput} id={nameId} required={required} onChange={handlerChange} />
        }
    };

    const handlerChange = (e) => {
        setFocused(!!e.target.value.length);
        /*validInput(e.target);*/
        setFormValue({...formValue, [e.target.name]: e.target.value})
    };

    return (
        <>
            <div className="form-input">
                {renderInput()}
                {children && <label htmlFor={nameId}>{children}{required && ' *'}</label>}
                {error && <span className="form-input__error-text">Заполните поле</span>}
            </div>
        </>
    )
};

export default FormInput;
