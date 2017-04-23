import React from 'react';
import './form.scss';

const Form = ({children, className}) => {
    return (
        <div className={`form ${className}`.trim()}>
            {children}
        </div>
    );
};

export default Form;
