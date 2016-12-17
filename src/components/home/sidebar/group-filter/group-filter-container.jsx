// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import GroupFilter from './group-filter';
import GroupFilterList from './group-filter-list';
import NewGroupLink from './new-group-link';

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
            <div className="group-filter-container">
                <GroupFilterList>
                    {
                        this.props.taskGroups
                            .filter(tg => tg.ParentTaskGroupId == this.props.taskGroupId)
                            .map((taskGroup, key) => {
                                return (
                                    <GroupFilter
                                        key={key}
                                        taskGroupId={taskGroup.Id}
                                        taskGroupName={taskGroup.Name}
                                        taskGroups={this.props.taskGroups}
                                        handleAddTaskGroupClick={this.props.handleAddTaskGroupClick}
                                        handleTaskGroupClick={this.props.handleTaskGroupClick}
                                        handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                                        handleTaskGroupSave={this.props.handleTaskGroupSave}
                                    />
                                );
                            })
                    }

                    <NewGroupLink />
                </GroupFilterList>
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
