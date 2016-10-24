import React, { Component, PropTypes } from 'react';
import NavPill from '~/navigation/nav-pills/nav-pill';
import NavPillGroup from '~/navigation/nav-pills/nav-pill-group';

import { completion, date } from '@/utils/filter-values';

class TaskListDateFilter extends Component {

    render() {
        return (
            <div className="filter task-list-date-filter">
                <NavPillGroup>
                    <NavPill
                        text="today"
                        isActive={this.props.dateFilters.includes(date.TODAY)}
                        handleClick={() => this.props.handleFilterChange(date.TODAY)}
                    />
                    <NavPill
                        text="tomorrow"
                        isActive={this.props.dateFilters.includes(date.TOMORROW)}
                        isEnabled={this.props.completionFilter != completion.COMPLETE}
                        handleClick={() => this.props.handleFilterChange(date.TOMORROW)}
                    />
                    <NavPill
                        text="unplanned"
                        isActive={this.props.dateFilters.includes(date.UNPLANNED)}
                        handleClick={() => this.props.handleFilterChange(date.UNPLANNED)}
                    />
                </NavPillGroup>
            </div>
        );
    }
}

TaskListDateFilter.propTypes = {
    completionFilter: PropTypes.string.isRequired,
    dateFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListDateFilter;
