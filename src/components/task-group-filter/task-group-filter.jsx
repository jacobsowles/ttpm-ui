import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './task-group-filter.scss';

class TaskGroupFilter extends Component {
    render() {
        return (
            <div className="task-group-filter">
                <Link to={`/groups/${this.props.id}`} className="task-group-filter-name">
                    {this.props.name}
                </Link>
            </div>
        );
    }
}

TaskGroupFilter.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default TaskGroupFilter;
