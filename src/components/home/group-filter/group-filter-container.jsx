// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import GroupFilterList from './group-filter-list';
import LoadingGraphic from '~/loading-graphic';
import NewTaskGroupLink from './new-task-group-link';

// actions
import filterActions from '@/actions/filter-actions';
import taskActions from '@/actions/task-actions';
import taskGroupActions from '@/actions/task-group-actions';

class GroupFilterContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showLoadingGraphic: true
        };
    }

    componentWillMount() {
        this.props.fetchTaskGroups();
    }

    componentDidMount() {
        this.state = {
            showLoadingGraphic: false
        };
    }

    render() {
        return (
            <div>
                <LoadingGraphic showLoadingGraphic={this.state.showLoadingGraphic} />

                <GroupFilterList
                    taskGroups={this.props.taskGroups}
                    handleTaskGroupClick={this.props.handleTaskGroupClick}
                    handleAddTaskGroupClick={this.props.handleAddTaskGroupClick}
                    handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                    handleTaskGroupSave={this.props.handleTaskGroupSave}
                />
            </div>
        );
    }
}

GroupFilterContainer.propTypes = {
    taskGroups: PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchTaskGroups: PropTypes.func.isRequired,
    handleTaskGroupClick: PropTypes.func.isRequired,
    handleAddTaskGroupClick: PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: PropTypes.func.isRequired,
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

        handleTaskGroupClick: function(taskGroupId) {
            dispatch(filterActions.setTaskGroupFilter(taskGroupId));
            dispatch(filterActions.fetchTaskGroupDisplayOrder(taskGroupId));
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

        handleTaskGroupSave: function(taskGroupId, taskGroup) {
            dispatch(taskGroupActions.updateTaskGroup(taskGroupId, taskGroup)).then(() => {
                dispatch(taskGroupActions.fetchTaskGroups());
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupFilterContainer);
