import React, { Component, PropTypes } from 'react';
import './workspace.scss';

const Workspace = props => {
    return (
        <main className="workspace">
            {props.children}
        </main>
    );
};

Workspace.propTypes = {
};

export default Workspace;
