// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Accordion from '../../accordion/accordion.jsx';
import AccordionItem from '../../accordion/accordion-item/accordion-item.jsx';
import LoadingGraphic from '../../loading-graphic/loading-graphic.jsx';
import ProjectFilter from './project-filter/project-filter.jsx';
import SwapoutInputField from '../../fields/swapout-input-field/swapout-input-field.jsx';
import TaskListFilterGroup from './task-list-filter-group/task-list-filter-group.jsx';

// actions
import projectActions from '../../../actions/project-actions.js';
import taskActions from '../../../actions/task-actions.js';
import taskListActions from '../../../actions/task-list-actions.js';

// styles
require('./task-filter-container.scss');

class TaskFilterContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showLoadingGraphic: true
        };
    }

    componentWillMount() {
        this.props.fetchProjects();
        this.props.fetchTaskLists();
    }

    componentDidMount() {
        this.state = {
            showLoadingGraphic: false
        };
    }

    render() {
        return (
            <div className="task-filter-container">
                <LoadingGraphic showLoadingGraphic={this.state.showLoadingGraphic} />

                <Accordion>
                    {
                        this.props.projects.map(function(project, key) {
                            return (
                                <AccordionItem
                                    key={key}
                                    header={{
                                        content: <ProjectFilter
                                            projectName={project.Name}
                                            projectId={project.Id}
                                            handleProjectClick={this.props.handleProjectClick.bind(this)}
                                            handleDeleteProjectClick={this.props.handleDeleteProjectClick}
                                        />
                                    }}
                                    body={{
                                        content: (
                                            <TaskListFilterGroup
                                                taskLists={this.props.taskLists.filter(tl => tl.ProjectId == project.Id)}
                                                projectId={project.Id}
                                                handleTaskListClick={this.props.handleTaskListClick}
                                                handleAddTaskListClick={this.props.handleAddTaskListClick}
                                                handleDeleteTaskListClick={this.props.handleDeleteTaskListClick}
                                            />
                                        )
                                    }}
                                />
                            );
                        }.bind(this))
                    }
                    <SwapoutInputField
                        type='project'
                        text='Add a new project'
                        handleSubmit={this.props.handleAddProjectClick}
                    />
                </Accordion>
            </div>
        );
    }
}

TaskFilterContainer.propTypes = {
    projects: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchProjects: React.PropTypes.func.isRequired,
    fetchTaskLists: React.PropTypes.func.isRequired,

    handleProjectClick: React.PropTypes.func.isRequired,
    handleAddProjectClick: React.PropTypes.func.isRequired,
    handleDeleteProjectClick: React.PropTypes.func.isRequired,

    handleTaskListClick: React.PropTypes.func.isRequired,
    handleAddTaskListClick: React.PropTypes.func.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        projects: state.projects.projects,
        taskLists: state.taskLists.taskLists
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProjects: function() {
            dispatch(projectActions.fetchProjects());
        },

        fetchTaskLists: function() {
            dispatch(taskListActions.fetchTaskLists(this.projectId));
        },

        handleProjectClick: function(projectId) {
            dispatch(taskActions.filterTasksByProject(this.props.taskLists, projectId));
        },

        handleAddProjectClick: function(name) {
            dispatch(projectActions.addProject(name)).then(function() {
                dispatch(projectActions.fetchProjects());
            });
        },

        handleDeleteProjectClick: function(projectId, event) {
            event.stopPropagation(); // prevents the project accordion from expanding
            dispatch(projectActions.deleteProject(projectId)).then(function() {
                dispatch(projectActions.fetchProjects()).then(function() {
                    dispatch(taskListActions.fetchTaskLists()).then(function() {
                        dispatch(taskActions.fetchTasks());
                    });
                });
            });
        },

        handleTaskListClick: function(taskListId) {
            dispatch(taskActions.filterTasksByTaskList(taskListId));
        },

        handleAddTaskListClick: function(name, boundData) {
            dispatch(taskListActions.addTaskList(name, boundData.projectId)).then(function() {
                dispatch(taskListActions.fetchTaskLists());
            });
        },

        handleDeleteTaskListClick: function(taskListId) {
            dispatch(taskListActions.deleteTaskList(taskListId)).then(function() {
                dispatch(taskListActions.fetchTaskLists()).then(function() {
                    dispatch(taskActions.fetchTasks());
                });
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilterContainer);
