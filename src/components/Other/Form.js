import React from "react";

const Form = ({classForm = '', textBtn = 'Отправить', children}) => {
    return (
        <>
            <form action="#" method="post" className={classForm + "-form"}>
                {children}
                <div className="callback-submit">
                    <button type="submit" className={`btn ${classForm}-btn`}>{textBtn}</button>
                </div>
            </form>
        </>
    )
};

export default Form;
