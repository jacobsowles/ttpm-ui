import React, { Component, PropTypes } from 'react';
import NavPill from '~/navigation/nav-pills/nav-pill';
import NavPillGroup from '~/navigation/nav-pills/nav-pill-group';

import { completion, status } from '@/utils/filter-values';

class TaskListStatusFilter extends Component {

    render() {
        return (
            <div className="filter task-list-status-filter">
                <NavPillGroup>
                    <NavPill
                        text="blocked"
                        isActive={this.props.statusFilters.includes(status.BLOCKED)}
                        handleClick={() => this.props.handleFilterChange(status.BLOCKED)}
                    />
                    <NavPill
                        text="delegated"
                        isActive={this.props.statusFilters.includes(status.DELEGATED)}
                        handleClick={() => this.props.handleFilterChange(status.DELEGATED)}
                    />
                </NavPillGroup>
            </div>
        );
    }
}

TaskListStatusFilter.propTypes = {
    completionFilter: PropTypes.string.isRequired,
    statusFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListStatusFilter;
