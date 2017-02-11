import React from 'react';
import './auth-wrapper.scss';

const AuthWrapper = ({children}) => {
    return (
        <div className="auth-wrapper">
            {children}
        </div>
    );
};

export default AuthWrapper;
