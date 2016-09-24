// npm modules
import React from 'react';
import { connect } from 'react-redux';

// components
import Accordion from '../../accordion/accordion.jsx';
import AccordionItem from '../../accordion/accordion-item/accordion-item.jsx';
import GroupFilter from './group-filter/group-filter.jsx';
import LoadingGraphic from '../../loading-graphic/loading-graphic.jsx';
import NewTaskGroupLink from './new-task-group-link.jsx';

// actions
import filterActions from '../../../actions/filter-actions.js';
import taskActions from '../../../actions/task-actions.js';
import taskGroupActions from '../../../actions/task-group-actions.js';

class GroupFilterContainer extends React.Component {

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
    taskGroups: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchTaskGroups: React.PropTypes.func.isRequired,
    handleTaskGroupClick: React.PropTypes.func.isRequired,
    handleAddTaskGroupClick: React.PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: React.PropTypes.func.isRequired
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
        },

        handleAddTaskGroupClick: function(name, taskGroup) {
            const parentTaskGroupId = taskGroup ? taskGroup.Id : null;

            dispatch(taskGroupActions.addTaskGroup({
                parentTaskGroupId: parentTaskGroupId,
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupFilterContainer);
