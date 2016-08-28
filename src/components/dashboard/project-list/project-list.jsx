// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Accordion from '../../accordion/accordion.jsx';
import AccordionItem from '../../accordion/accordion-item/accordion-item.jsx';

// actions
import projectListActions from './project-list-actions.js';

class ProjectList extends React.Component {

    componentWillMount() {
        this.props.fetchProjectList();
    }

    render() {
        return (
            <div className="project-list">
                {this.props.error}
                <Accordion>
                    {this.props.projects.map(function(project, key) {
                        return (
                            <AccordionItem
                                key={key}
                                header={{
                                    content: project.Name,
                                    class: 'project'
                                }}
                                body={{
                                    content: 'Task List',
                                    class: 'task-list'
                                }}
                            />
                        )
                    })}
                </Accordion>
            </div>
        );
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
        fetchProjectList: projectListActions.fetchProjectList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
