import React, { Component, PropTypes } from 'react';
require('./task-list-placeholder.scss');

class TaskListPlaceholder extends Component {

    render() {
        return (
            <p className="task-list-placeholder">
                <span className="large">{this.props.headline}</span>
                {this.props.body}
            </p>
        );
    }
}

TaskListPlaceholder.propTypes = {
    headline: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default TaskListPlaceholder;
