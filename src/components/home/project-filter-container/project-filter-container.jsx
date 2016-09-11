// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Accordion from '../../accordion/accordion.jsx';
import AccordionItem from '../../accordion/accordion-item/accordion-item.jsx';
import LoadingGraphic from '../../loading-graphic/loading-graphic.jsx';
import ProjectFilter from './project-filter/project-filter.jsx';
import TaskListFilterContainer from './task-list-filter-container/task-list-filter-container.jsx';
import ViewEditToggleField from '../../view-edit-toggle-field/view-edit-toggle-field.jsx';

// actions
import bottomDrawerActions from '../bottom-drawer/bottom-drawer-actions.js';
import projectFilterContainerActions from './project-filter-container-actions.js';
import taskTableActions from '../task-table/task-table-actions.js';

// styles
require('./project-filter-container.scss');

class ProjectFilterContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showLoadingGraphic: true
        };
    }

    componentWillMount() {
        this.props.fetchProjects();
    }

    componentDidMount() {
        this.state = {
            showLoadingGraphic: false
        };
    }

    render() {
        return (
            <div className="project-filter-container">
                {this.props.error}

                <LoadingGraphic showLoadingGraphic={this.state.showLoadingGraphic} />

                <Accordion>
                    {
                        this.props.projects.map(function(project, key) {
                            const taskLists = this.props.taskLists.filter(function(taskList) {
                                return taskList.ProjectId == project.Id;
                            });

                            return (
                                <AccordionItem
                                    key={key}
                                    header={{
                                        content: <ProjectFilter
                                            projectName={project.Name}
                                            projectId={project.Id}
                                            handleItemClick={this.props.handleProjectClick.bind(this)}
                                            handleDeleteProjectClick={this.props.handleDeleteProjectClick}
                                        />
                                    }}
                                    body={{
                                        content: (
                                            <div>
                                                <TaskListFilterContainer
                                                    taskLists={taskLists}
                                                    projectId={project.Id}
                                                    handleItemClick={this.props.handleTaskListClick}
                                                    handleDeleteTaskListClick={this.props.handleDeleteTaskListClick}
                                                />
                                                <ViewEditToggleField
                                                    type='task-list'
                                                    text='+ Add a new task list'
                                                    handleSubmit={this.props.handleAddTaskListClick}
                                                    includeWithSubmit={{
                                                        projectId: project.Id
                                                    }}
                                                />
                                            </div>
                                        )
                                    }}
                                />
                            );
                        }.bind(this))
                    }
                    <ViewEditToggleField
                        type='project'
                        text='+ Add a new project'
                        handleSubmit={this.props.handleAddProjectClick}
                    />
                </Accordion>
            </div>
        );
    }
}

ProjectFilterContainer.propTypes = {
    error: React.PropTypes.string.isRequired,
    projects: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchProjects: React.PropTypes.func.isRequired,
    handleProjectClick: React.PropTypes.func.isRequired,
    handleTaskListClick: React.PropTypes.func.isRequired,
    handleAddProjectClick: React.PropTypes.func.isRequired,
    handleDeleteProjectClick: React.PropTypes.func.isRequired,
    handleAddTaskListClick: React.PropTypes.func.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        error: state.projects.error,
        projects: state.projects.projects,
        taskLists: state.projects.taskLists
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProjects: function() {
            dispatch(projectFilterContainerActions.fetchProjects());
        },

        handleProjectClick: function(projectId) {
            dispatch(taskTableActions.filterTaskTableByProject(this.props.taskLists, projectId)).then(function(tasks) {
                console.log(tasks);
                dispatch(bottomDrawerActions.refreshAnalytics());
            });
        },

        handleTaskListClick: function(taskListId) {
            dispatch(taskTableActions.filterTaskTableByTaskList(taskListId));
        },

        handleAddProjectClick: function(name) {
            dispatch(projectFilterContainerActions.addProject(name)).then(function() {
                dispatch(projectFilterContainerActions.fetchProjects());
            });
        },

        handleDeleteProjectClick: function(projectId, event) {
            event.stopPropagation(); // prevents the project accordion from expanding
            dispatch(projectFilterContainerActions.deleteProject(projectId)).then(function() {
                dispatch(projectFilterContainerActions.fetchProjects());
            });
        },

        handleAddTaskListClick: function(name, boundData) {
            dispatch(projectFilterContainerActions.addTaskList(name, boundData.projectId)).then(function() {
                dispatch(projectFilterContainerActions.fetchProjects());
            });
        },

        handleDeleteTaskListClick: function(taskListId) {
            dispatch(projectFilterContainerActions.deleteTaskList(taskListId)).then(function() {
                dispatch(projectFilterContainerActions.fetchProjects());
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFilterContainer);
