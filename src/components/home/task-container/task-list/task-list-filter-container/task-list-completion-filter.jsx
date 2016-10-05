import React, { Component, PropTypes } from 'react';
import { completion } from '@/filter-values';

require('./task-list-completion-filter.scss');

class TaskListCompletionFilter extends Component {

    render() {
        return (
            <div className="task-list-completion-filter">
                <ul className="nav nav-pills" style={{display: 'inline-block'}}>
                    <li role="presentation" className={this.props.activeFilter == completion.COMPLETE ? 'active' : ''}><a onClick={() => this.props.handleFilterChange(completion.COMPLETE)}>complete</a></li>
                    <li role="presentation" className={this.props.activeFilter == completion.INCOMPLETE ? 'active' : ''}><a onClick={() => this.props.handleFilterChange(completion.INCOMPLETE)}>incomplete</a></li>
                    <li role="presentation" className={this.props.activeFilter == completion.ALL ? 'active' : ''}><a onClick={() => this.props.handleFilterChange(completion.ALL)}>all</a></li>
                </ul>
            </div>
        );
    }
}

TaskListCompletionFilter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListCompletionFilter;
