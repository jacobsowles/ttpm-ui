// npm modules
import React from 'react';

// styles
require('./project-filter.scss');

class ProjectFilter extends React.Component {

    render() {
        return (
            <div
                className="project-filter"
                onClick={() => this.props.handleProjectClick(this.props.projectId)}
            >
                <i className="fa fa-angle-down" style={{marginRight: '10px'}}></i>
                {this.props.projectName}

                <span className="project-filter-actions">
                    <span
                        className="edit-project"
                    >
                        &#9998;
                    </span>
                    <span
                        className="delete-project"
                        onClick={(event) => this.props.handleDeleteProjectClick(this.props.projectId, event)}
                    >
                        &times;
                    </span>
                </span>
            </div>
        );
    }
}

ProjectFilter.propTypes = {
    projectName: React.PropTypes.string.isRequired,
    projectId: React.PropTypes.number.isRequired,
    handleProjectClick: React.PropTypes.func.isRequired,
    handleDeleteProjectClick: React.PropTypes.func.isRequired
};

export default ProjectFilter;
