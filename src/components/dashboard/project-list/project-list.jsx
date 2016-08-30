// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Accordion from '../../accordion/accordion.jsx';
import AccordionItem from '../../accordion/accordion-item/accordion-item.jsx';
import TaskListItems from './task-list-items/task-list-items.jsx';

// actions
import projectListActions from './project-list-actions.js';

class ProjectList extends React.Component {

    constructor() {
        super();
        this.handleAddProjectClick = this.handleAddProjectClick.bind(this);
        this.handleAddTaskListClick = this.handleAddTaskListClick.bind(this);
        this.handleDeleteTaskListClick = this.handleDeleteTaskListClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchProjectList();
    }

    render() {
        return (
            <div className="project-list">
                {this.props.error}

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
                                        content: project.Name,
                                        class: 'project'
                                    }}
                                    body={{
                                        content: <TaskListItems
                                            taskLists={taskLists}
                                            projectId={project.Id}
                                            handleAddTaskListClick={this.handleAddTaskListClick}
                                            handleDeleteTaskListClick={this.handleDeleteTaskListClick}
                                        />
                                    }}
                                />
                            );
                        }.bind(this))
                    }
                    <section>
                        <a
                            className='project add-project-link'
                            onClick={() => this.handleAddProjectClick('New Project')}
                        >
                            + Add a new project
                        </a>
                    </section>
                </Accordion>
            </div>
        );
    }

    handleAddProjectClick(name) {
        this.props.addProject(name);
        this.props.fetchProjectList();
    }

    handleAddTaskListClick(projectId) {
        this.props.addTaskList(projectId);
        this.props.fetchProjectList();
    }

    handleDeleteTaskListClick(taskListId) {
        this.props.deleteTaskList(taskListId);
        this.props.fetchProjectList();
    }
}

ProjectList.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string.isRequired,
    projects: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

function mapStateToProps(state) {
    return {
        isLoading: state.projectList.isLoading,
        error: state.projectList.error,
        projects: state.projectList.projects,
        taskLists: state.projectList.taskLists
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProjectList: projectListActions.fetchProjectList,
        addProject: projectListActions.addProject,
        addTaskList: projectListActions.addTaskList,
        deleteTaskList: projectListActions.deleteTaskList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
