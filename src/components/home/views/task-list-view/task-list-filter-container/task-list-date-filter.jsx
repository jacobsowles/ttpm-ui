import React, { Component, PropTypes } from 'react';
import NavPill from '~/navigation/nav-pills/nav-pill';
import NavPillGroup from '~/navigation/nav-pills/nav-pill-group';

import { date } from '@/utils/filter-values';

class TaskListDateFilter extends Component {

    render() {
        return (
            <div className="task-list-date-filter">
                <NavPillGroup>
                    <NavPill
                        text="all"
                        isActive={this.props.activeFilter == date.ALL}
                        handleClick={() => this.props.handleFilterChange(date.ALL)}
                    />
                    <NavPill
                        text="today"
                        isActive={this.props.activeFilter == date.TODAY}
                        handleClick={() => this.props.handleFilterChange(date.TODAY)}
                    />
                    <NavPill
                        text="tomorrow"
                        isActive={this.props.activeFilter == date.TOMORROW}
                        handleClick={() => this.props.handleFilterChange(date.TOMORROW)}
                    />
                    <NavPill
                        text="due"
                        isActive={this.props.activeFilter == date.DUE}
                        handleClick={() => this.props.handleFilterChange(date.DUE)}
                    />
                    <NavPill
                        text="unplanned"
                        isActive={this.props.activeFilter == date.UNPLANNED}
                        handleClick={() => this.props.handleFilterChange(date.UNPLANNED)}
                    />
                </NavPillGroup>
            </div>
        );
    }
}

TaskListDateFilter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListDateFilter;
