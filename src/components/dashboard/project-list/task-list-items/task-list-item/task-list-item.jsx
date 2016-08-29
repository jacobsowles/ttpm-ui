// npm modules
import React from 'react';

class TaskListItem extends React.Component {

    render() {
        return (
            <li>{this.props.taskList.Name}</li>
        );
    }
}

TaskListItem.propTypes = {
    taskList: React.PropTypes.object.isRequired
};

export default TaskListItem;
