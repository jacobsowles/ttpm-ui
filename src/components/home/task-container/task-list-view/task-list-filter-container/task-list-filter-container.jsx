// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import FilterIndicator from '~/home/filter-indicator/filter-indicator';
import TaskListCompletionFilter from './task-list-completion-filter';
import TaskListFilterWrapper from './task-list-filter-wrapper';

// actions
import filterActions from '@/actions/filter-actions';

class TaskListFilterContainer extends Component {

    render() {
        return (
            <TaskListFilterWrapper>
                <TaskListCompletionFilter
                    activeFilter={this.props.filters.completion}
                    handleFilterChange={this.props.setCompletionFilter}
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

        clearTaskGroupFilter: function() {
            dispatch(filterActions.setTaskGroupFilter(0));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListFilterContainer);
