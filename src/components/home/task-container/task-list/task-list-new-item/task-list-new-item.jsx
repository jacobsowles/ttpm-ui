import React from 'react';
import TextBox from '~/fields/text-box';

require('./task-list-new-item.scss');

class TaskListNewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetFields() {
        this.setState({
            value: ''
        });
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                this.resetFields(event);
                break;
            }

            case 'Enter': {
                this.handleSubmit(event);
                break;
            }
        }
    }

    handleSubmit(event) {
        if (event.target.value != '') {
            const task = {
                Name: event.target.value
            };

            this.resetFields();
            this.props.handleNewTask(task);
        }
    }

    render() {
        return (
            <div className="task-list-new-item">
                <TextBox
                    placeholder="Add a new task"
                    value={this.state.value}
                    handleKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

TaskListNewItem.propTypes = {
    handleNewTask: React.PropTypes.func.isRequired
};

export default TaskListNewItem;
