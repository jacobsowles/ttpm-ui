// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import GroupFilter from './group-filter/group-filter.jsx';
import LoadingGraphic from '../../loading-graphic.jsx';
import NewTaskGroupLink from './new-task-group-link.jsx';

// actions
import filterActions from '../../../actions/filter-actions.js';
import taskActions from '../../../actions/task-actions.js';
import taskGroupActions from '../../../actions/task-group-actions.js';

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

                {
                    this.props.taskGroups
                        .filter(tg => tg.ParentTaskGroupId == null)
                        .map((taskGroup, key) => {
                            return (
                                <GroupFilter
                                    key={key}
                                    taskGroup={taskGroup}
                                    taskGroups={this.props.taskGroups}
                                    level={0}
                                    handleTaskGroupClick={this.props.handleTaskGroupClick}
                                    handleAddTaskGroupClick={this.props.handleAddTaskGroupClick}
                                    handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                                    handleTaskGroupSave={this.props.handleTaskGroupSave}
                                />
                            );
                    })
                }

                <NewTaskGroupLink handleSubmit={this.props.handleAddTaskGroupClick} />
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

        handleAddTaskGroupClick: function(name, taskGroup) {
            dispatch(taskGroupActions.addTaskGroup({
                parentTaskGroupId: taskGroup ? taskGroup.Id : null,
                name: name
            })).then(() => {
                dispatch(taskGroupActions.fetchTaskGroups());
            });
        },

        handleDeleteTaskGroupClick: function(taskGroup, event) {
            dispatch(taskGroupActions.deleteTaskGroup(taskGroup.Id)).then(() => {
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
