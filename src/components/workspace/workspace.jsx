import React from 'react';
import './workspace.scss';

const Workspace = props => {
    return (
        <main className="workspace">
            {props.children}
        </main>
    );
};

export default Workspace;
