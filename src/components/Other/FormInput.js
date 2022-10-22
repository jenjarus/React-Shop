const FormInput = ({classForm = '', nameInput = '', required = false, children}) => {
    const name = classForm + "-" + nameInput;

    return (
        <>
            <div className="form-input">
                <input type="text" name={name} id={name} required={required} />
                {children && <label htmlFor={name}>{children}</label>}
            </div>
        </>
    )
};

export default FormInput;
