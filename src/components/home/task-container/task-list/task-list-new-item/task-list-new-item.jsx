import React from 'react';
import TextBox from '~/fields/text-box';

require('./task-list-new-item.scss');

class TaskListNewItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(event) {
        if (event.target.value != '') {
            this.props.handleNewTask({
                Name: event.target.value
            });
        }
    }

    render() {
        return (
            <div className="task-list-new-item">
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
    handleNewTask: React.PropTypes.func.isRequired
};

export default TaskListNewItem;
