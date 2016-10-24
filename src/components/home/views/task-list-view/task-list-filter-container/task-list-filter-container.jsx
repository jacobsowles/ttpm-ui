// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import FilterIndicator from './task-list-group-filter-indicator';
import TaskListCompletionFilter from './task-list-completion-filter';
import TaskListDateFilter from './task-list-date-filter';
import TaskListFilterWrapper from './task-list-filter-wrapper';
import TaskListStatusFilter from './task-list-status-filter';

// actions
import filterActions from '@/actions/filter-actions';

class TaskListFilterContainer extends Component {

    render() {
        return (
            <TaskListFilterWrapper>
                <TaskListDateFilter
                    completionFilter={this.props.filters.completion}
                    dateFilters={this.props.filters.date}
                    handleFilterChange={this.props.toggleDateFilter}
                />

                <TaskListCompletionFilter
                    completionFilter={this.props.filters.completion}
                    dateFilters={this.props.filters.date}
                    statusFilters={this.props.filters.status}
                    handleFilterChange={this.props.toggleCompletionFilter}
                />

                <TaskListStatusFilter
                    completionFilter={this.props.filters.completion}
                    statusFilters={this.props.filters.status}
                    handleFilterChange={this.props.toggleStatusFilter}
                />

                <FilterIndicator
                    taskGroupName={this.props.taskGroupName}
                    handleFilterClear={this.props.clearTaskGroupFilter}
                />
            </TaskListFilterWrapper>
        );
    }
}

TaskListFilterContainer.propTypes = {
    taskGroupName: PropTypes.string,
    filters: PropTypes.object
};

function mapStateToProps(state) {
    return {
        filters: state.filters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleCompletionFilter: function(filter) {
            dispatch(filterActions.toggleCompletionFilter(filter));
        },

        toggleDateFilter: function(filter) {
            dispatch(filterActions.toggleDateFilter(filter));
        },

        toggleStatusFilter: function(filter) {
            dispatch(filterActions.toggleStatusFilter(filter));
        },

        clearTaskGroupFilter: function() {
            dispatch(filterActions.setTaskGroupFilter(0));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListFilterContainer);
