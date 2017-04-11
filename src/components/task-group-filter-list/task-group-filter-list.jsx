import React, { Component, PropTypes } from 'react';
import './task-group-filter-list.scss';

class TaskGroupFilterList extends Component {
    render() {
        return (
            <div className="task-group-filter-list">
                {this.props.children}
            </div>
        );
    }
}

TaskGroupFilterList.propTypes = {
};

export default TaskGroupFilterList;
