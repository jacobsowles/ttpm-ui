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
                        text="all"
                        isActive={this.props.statusFilter == status.ALL}
                        handleClick={() => this.props.handleFilterChange(status.ALL)}
                    />
                    <NavPill
                        text="blocked"
                        isActive={this.props.statusFilter == status.BLOCKED}
                        isEnabled={this.props.completionFilter != completion.COMPLETE}
                        handleClick={() => this.props.handleFilterChange(status.BLOCKED)}
                    />
                    <NavPill
                        text="delegated"
                        isActive={this.props.statusFilter == status.DELEGATED}
                        handleClick={() => this.props.handleFilterChange(status.DELEGATED)}
                    />
                </NavPillGroup>
            </div>
        );
    }
}

TaskListStatusFilter.propTypes = {
    completionFilter: PropTypes.string.isRequired,
    statusFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListStatusFilter;
