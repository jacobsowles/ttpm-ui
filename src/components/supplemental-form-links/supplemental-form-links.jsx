import React from 'react';
import './supplemental-form-links.scss';

const SupplementalFormLinks = (props) => {
    const { children, className, ..._props } = props;
    return (
        <div
            className={`supplemental-form-links ${className}`.trim()}
            {..._props}
        >
            {children}
        </div>
    );
};

export default SupplementalFormLinks;
