// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import GroupFilterList from './group-filter-list';
import LoadingWrapper from '~/loading/loading-wrapper';
import NewTaskGroupLink from './new-task-group-link';

// actions
import filterActions from '@/actions/filter-actions';
import taskActions from '@/actions/task-actions';
import taskGroupActions from '@/actions/task-group-actions';

class GroupFilterContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentWillMount() {
        this.props.fetchTaskGroups();
    }

    componentDidMount() {
        this.state = {
            isLoading: false
        };
    }

    render() {
        return (
            <LoadingWrapper showLoadingGraphic={this.state.isLoading}>
                <GroupFilterList
                    taskGroups={this.props.taskGroups}
                    handleAddTaskGroupClick={this.props.handleAddTaskGroupClick}
                    handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                    handleTaskGroupClick={this.props.handleTaskGroupClick}
                    handleTaskGroupOrderChange={this.props.handleTaskGroupOrderChange}
                    handleTaskGroupSave={this.props.handleTaskGroupSave}
                />
            </LoadingWrapper>
        );
    }
}

GroupFilterContainer.propTypes = {
    taskGroups: PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchTaskGroups: PropTypes.func.isRequired,
    handleAddTaskGroupClick: PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupOrderChange: PropTypes.func.isRequired,
    handleTaskGroupSave: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        taskGroups: state.taskGroups
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTaskGroups: function() {
            dispatch(taskGroupActions.fetchTaskGroups());
        },

        handleAddTaskGroupClick: function(taskGroupId, event) {
            dispatch(taskGroupActions.addTaskGroup({
                parentTaskGroupId: taskGroupId,
                name: event.target.value
            })).then(() => {
                dispatch(taskGroupActions.fetchTaskGroups());
            });
        },

        handleDeleteTaskGroupClick: function(taskGroupId, event) {
            dispatch(taskGroupActions.deleteTaskGroup(taskGroupId)).then(() => {
                dispatch(taskGroupActions.fetchTaskGroups()).then(() => {
                    dispatch(taskActions.fetchTasks());
                });
            });
        },

        handleTaskGroupClick: function(taskGroupId) {
            dispatch(filterActions.setTaskGroupFilter(taskGroupId));
            dispatch(filterActions.fetchTaskGroupDisplayOrder(taskGroupId));
        },

        handleTaskGroupOrderChange: function(dragIndex, dropIndex) {
            console.log('dragIndex: ', dragIndex);
            console.log('dropIndex: ', dropIndex);
        },

        handleTaskGroupSave: function(taskGroupId, taskGroup) {
            dispatch(taskGroupActions.updateTaskGroup(taskGroupId, taskGroup)).then(() => {
                dispatch(taskGroupActions.fetchTaskGroups());
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupFilterContainer);
