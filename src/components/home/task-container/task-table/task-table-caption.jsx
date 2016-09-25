// npm modules
import React from 'react';

const styles = {
    caption: {
        padding: '0 0 10px 0',
        fontSize: '.9em',
        textAlign: 'right'
    }
};

class TaskTableCaption extends React.Component {

    render() {
        return (
            <caption style={styles.caption}>
                {
                    this.props.taskGroupName
                        ? <span>showing tasks in the <strong>{this.props.taskGroupName}</strong> group | <a href="/">show all tasks</a></span>
                        : <span>showing all tasks</span>
                }
            </caption>
        );
    }
}

TaskTableCaption.propTypes = {
    taskGroupName: React.PropTypes.string
};

export default TaskTableCaption;
