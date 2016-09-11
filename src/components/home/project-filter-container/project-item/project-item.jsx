// npm modules
import React from 'react';

// styles
require('./project-item.scss');

class ProjectItem extends React.Component {

    render() {
        return (
            <div
                className="project-item"
                onClick={() => this.props.handleItemClick(this.props.projectId)}
            >
                {this.props.projectName}
                <span className="item-actions">
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

ProjectItem.propTypes = {
    projectName: React.PropTypes.string.isRequired,
    projectId: React.PropTypes.number.isRequired,
    handleItemClick: React.PropTypes.func.isRequired,
    handleDeleteProjectClick: React.PropTypes.func.isRequired
};

export default ProjectItem;
