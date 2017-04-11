import React, { Component, PropTypes } from 'react';
import './workspace.scss';

class Workspace extends Component {
    render() {
        return (
            <main className="workspace">
                {this.props.children}
            </main>
        );
    }
}

Workspace.propTypes = {
};

export default Workspace;
