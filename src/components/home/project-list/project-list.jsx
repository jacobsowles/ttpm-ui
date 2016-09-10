// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Accordion from '../../accordion/accordion.jsx';
import AccordionItem from '../../accordion/accordion-item/accordion-item.jsx';
import AddNew from './add-new/add-new.jsx';
import LoadingGraphic from '../../loading-graphic/loading-graphic.jsx';
import ProjectItem from './project-item/project-item.jsx';
import TaskListItems from './task-list-items/task-list-items.jsx';

// actions
import projectListActions from './project-list-actions.js';
import taskTableActions from '../task-table/task-table-actions.js';

// styles
require('./project-list.scss');

class ProjectList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showLoadingGraphic: true
        };
    }

    componentWillMount() {
        this.props.fetchProjectList();
    }

    componentDidMount() {
        this.state = {
            showLoadingGraphic: false
        };
    }

    render() {
        return (
            <div className="project-list">
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
                                        content: <ProjectItem
                                            projectName={project.Name}
                                            projectId={project.Id}
                                            handleItemClick={this.props.handleProjectClick.bind(this)}
                                            handleDeleteProjectClick={this.props.handleDeleteProjectClick}
                                        />
                                    }}
                                    body={{
                                        content: (
                                            <div>
                                                <TaskListItems
                                                    taskLists={taskLists}
                                                    projectId={project.Id}
                                                    handleItemClick={this.props.handleTaskListClick}
                                                    handleDeleteTaskListClick={this.props.handleDeleteTaskListClick}
                                                />
                                                <AddNew
                                                    entity='task list'
                                                    class='add-new-task-list'
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
                    <AddNew
                        entity='project'
                        class='add-new-project'
                        handleSubmit={this.props.handleAddProjectClick}
                    />
                </Accordion>
            </div>
        );
    }
}

ProjectList.propTypes = {
    error: React.PropTypes.string.isRequired,
    projects: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchProjectList: React.PropTypes.func.isRequired,
    handleProjectClick: React.PropTypes.func.isRequired,
    handleTaskListClick: React.PropTypes.func.isRequired,
    handleAddProjectClick: React.PropTypes.func.isRequired,
    handleDeleteProjectClick: React.PropTypes.func.isRequired,
    handleAddTaskListClick: React.PropTypes.func.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        error: state.projectList.error,
        projects: state.projectList.projects,
        taskLists: state.projectList.taskLists
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProjectList: function() {
            dispatch(projectListActions.fetchProjectList());
        },

        handleProjectClick: function(projectId) {
            dispatch(taskTableActions.filterTaskTableByProject(this.props.taskLists, projectId));
        },

        handleTaskListClick: function(taskListId) {
            dispatch(taskTableActions.filterTaskTableByTaskList(taskListId));
        },

        handleAddProjectClick: function(name) {
            dispatch(projectListActions.addProject(name)).then(function() {
                dispatch(projectListActions.fetchProjectList());
            });
        },

        handleDeleteProjectClick: function(projectId, event) {
            event.stopPropagation(); // prevents the project accordion from expanding
            dispatch(projectListActions.deleteProject(projectId)).then(function() {
                dispatch(projectListActions.fetchProjectList());
            });
        },

        handleAddTaskListClick: function(name, boundData) {
            dispatch(projectListActions.addTaskList(name, boundData.projectId)).then(function() {
                dispatch(projectListActions.fetchProjectList());
            });
        },

        handleDeleteTaskListClick: function(taskListId) {
            dispatch(projectListActions.deleteTaskList(taskListId)).then(function() {
                dispatch(projectListActions.fetchProjectList());
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
