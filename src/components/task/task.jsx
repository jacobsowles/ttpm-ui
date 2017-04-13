import React, { Component, PropTypes } from 'react';
import './task.scss';

class Task extends Component {
    render() {
        return (
            <div className="task">
                <h2 className="task-title">{this.props.name}</h2>
            </div>
        );
    }
}

Task.propTypes = {
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default Task;
