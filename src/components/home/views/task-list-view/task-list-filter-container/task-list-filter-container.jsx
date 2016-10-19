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
                    activeFilter={this.props.filters.date}
                    handleFilterChange={this.props.setDateFilter}
                    />

                <TaskListCompletionFilter
                    completionFilter={this.props.filters.completion}
                    dateFilter={this.props.filters.date}
                    statusFilter={this.props.filters.status}
                    handleFilterChange={this.props.setCompletionFilter}
                />

                <TaskListStatusFilter
                    completionFilter={this.props.filters.completion}
                    statusFilter={this.props.filters.status}
                    handleFilterChange={this.props.setStatusFilter}
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
        setCompletionFilter: function(filter) {
            dispatch(filterActions.setCompletionFilter(filter));
        },

        setDateFilter: function(filter) {
            dispatch(filterActions.setDateFilter(filter));
        },

        setStatusFilter: function(filter) {
            dispatch(filterActions.setStatusFilter(filter));
        },

        clearTaskGroupFilter: function() {
            dispatch(filterActions.setTaskGroupFilter(0));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListFilterContainer);
