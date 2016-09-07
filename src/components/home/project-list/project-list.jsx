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

// styles
require('./project-list.scss');

class ProjectList extends React.Component {

    componentWillMount() {
        this.props.fetchProjectList();
        // TODO: ProjectItem and ProjectListItem should really just be one component with different props
    }

    render() {
        return (
            <div className="project-list">
                {this.props.error}

                <LoadingGraphic showLoadingGraphic={this.props.showLoadingGraphic} />

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
                                            handleDeleteProjectClick={this.props.handleDeleteProjectClick}
                                        />,
                                        class: 'project'
                                    }}
                                    body={{
                                        content: <TaskListItems
                                            taskLists={taskLists}
                                            projectId={project.Id}
                                            handleAddTaskListClick={this.props.handleAddTaskListClick}
                                            handleDeleteTaskListClick={this.props.handleDeleteTaskListClick}
                                        />
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
    showLoadingGraphic: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string.isRequired,
    projects: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchProjectList: React.PropTypes.func.isRequired,
    handleAddProjectClick: React.PropTypes.func.isRequired,
    handleDeleteProjectClick: React.PropTypes.func.isRequired,
    handleAddTaskListClick: React.PropTypes.func.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        showLoadingGraphic: state.projectList.isLoading,
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
        handleAddProjectClick: function(name) {
            dispatch(projectListActions.addProject(name)).then(function() {
                dispatch(projectListActions.fetchProjectList());
            });
        },
        handleDeleteProjectClick: function(projectId) {
            dispatch(projectListActions.deleteProject(projectId)).then(function() {
                dispatch(projectListActions.fetchProjectList());
            });
        },
        handleAddTaskListClick: function(projectId) {
            dispatch(projectListActions.addTaskList(projectId)).then(function() {
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
