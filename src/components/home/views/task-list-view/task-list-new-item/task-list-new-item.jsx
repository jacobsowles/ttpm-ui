import React, { Component, PropTypes } from 'react';
import TextBox from '~/fields/text-box';

require('./task-list-new-item.scss');

class TaskListNewItem extends Component {

    constructor(props) {
        super(props);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(event) {
        if (event.target.value != '') {
            this.props.handleNewTask({
                Name: event.target.value
            }, event.target);
        }
    }

    render() {
        return (
            <div className={`task-list-new-item ${this.props.className}`}>
                <TextBox
                    placeholder="Add a new task"
                    clearOnBlur={true}
                    handleBlur={this.handleBlur}
                />
            </div>
        );
    }
}

TaskListNewItem.propTypes = {
    className: PropTypes.string,
    handleNewTask: React.PropTypes.func.isRequired
};

export default TaskListNewItem;
