// npm modules
import React from 'react';

// styles
require('./new-task-row.scss');

class NewTaskRow extends React.Component {

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
        this.refs.newTaskNotes.value = '';
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
                Name: this.refs.newTaskName.value,
                Notes: this.refs.newTaskNotes.value
            };

            this.props.handleNewTask(task);
        }
    }

    render() {
        return (
            <tr className="new-task-row">
                <td style={{width: '30px'}}></td>
                <td><input type="text" ref="newTaskName" placeholder="Add a new task" onKeyDown={this.handleKeyDown} /></td>
                <td><input type="text" ref="newTaskNotes" placeholder="Optional notes" onKeyDown={this.handleKeyDown} /></td>
                <td style={{width: '30px'}}></td>
            </tr>
        );
    }
}

NewTaskRow.propTypes = {
    handleNewTask: React.PropTypes.func.isRequired
};

export default NewTaskRow;
