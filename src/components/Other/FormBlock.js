import React from "react";

const FormBlock = ({classes = '', children, ...props}) => {

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
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
