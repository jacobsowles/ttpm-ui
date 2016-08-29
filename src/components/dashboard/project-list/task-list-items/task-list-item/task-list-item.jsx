// npm modules
import React from 'react';

class TaskListItem extends React.Component {

    render() {
        return (
            <li className={this.props.class}>{this.props.taskList.Name}</li>
        );
    }
}

TaskListItem.propTypes = {
    taskList: React.PropTypes.object.isRequired,
    class: React.PropTypes.string
};

export default TaskListItem;
