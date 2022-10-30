import React from "react";
import {NAME_COMPONENTS} from "./constants"; // Массив созданных компонентов формы для передачи пропсов

const FormBlock = ({classes = '', children, ...props}) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && (NAME_COMPONENTS.find(el => el === child.type.name))) {
            return React.cloneElement(child, {...props});
        }
        return child;
    });

    return (
        <div className={classes}>
            {childrenWithProps}
        </div>
    );

};

export default FormBlock;
