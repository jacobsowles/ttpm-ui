// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import FilterIndicator from '~/home/filter-indicator/filter-indicator';
import TaskListCompletionFilter from './task-list-completion-filter';

// actions
import filterActions from '@/actions/filter-actions';

class TaskListFilterContainer extends Component {

    render() {
        return (
            <div>
                <TaskListCompletionFilter
                    activeFilter={this.props.filters.completion}
                    handleFilterChange={this.props.setCompletionFilter}
                />
                <FilterIndicator taskGroupName={this.props.taskGroupName} />
            </div>
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListFilterContainer);
