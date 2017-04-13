import React, { Component, PropTypes } from 'react';

import Checkbox from 'components/checkbox';
import './task.scss';

class Task extends Component {
    render() {
        return (
            <div className="task">
                <Checkbox checked={this.props.isComplete} />
                <h2 className="task-title">{this.props.name}</h2>
            </div>
        );
    }
}

Task.propTypes = {
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default Task;
