// npm modules
import React from 'react';

// styles
require('./task-list-new-item.scss');

class TaskListNewItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        this.resetFields();
    }

    resetFields() {
        this.refs.newTaskName.value = '';
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                this.resetFields();
                break;
            }

            case 'Enter': {
                this.handleSubmit();
                break;
            }
        }
    }

    handleSubmit() {
        if (this.refs.newTaskName) {
            const task = {
                Name: this.refs.newTaskName.value
            };

            this.props.handleNewTask(task);
        }
    }

    render() {
        return (
            <div className="task-list-new-item">
                <input type="text" ref="newTaskName" placeholder="Add a new task" onKeyDown={this.handleKeyDown} />
            </div>
        );
    }
}

TaskListNewItem.propTypes = {
    handleNewTask: React.PropTypes.func.isRequired
};

export default TaskListNewItem;
