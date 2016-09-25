// npm modules
import React from 'react';

// components
import Accordion from '../../../../accordion/accordion.jsx';
import AccordionItem from '../../../../accordion/accordion-item/accordion-item.jsx';
import TaskTableTaskDetails from './task-table-task-details.jsx';
import ViewEditToggleField from '../../../../fields/view-edit-toggle-field/view-edit-toggle-field.jsx';

// styles
require('./task-table-task.scss');

class TaskTableTask extends React.Component {

    render() {
        return (
            <Accordion>
                <AccordionItem
                    header={(
                        <ViewEditToggleField
                            text={this.props.task.Name}
                            handleSubmit={this.props.handleNameEdit}
                            includeWithSubmit={this.props.task}
                            isEditable={!this.props.task.Complete}
                        />
                    )}
                    body={(
                        <TaskTableTaskDetails
                            task={this.props.task}
                            handleNotesEdit={this.props.handleNotesEdit}
                            handleTaskDelete={this.props.handleTaskDelete}
                        />
                    )}
                    activateOnHeaderClick={true}
                    showIconOnRight={true}
                />
            </Accordion>
        );
    }
}

TaskTableTask.propTypes = {
    task: React.PropTypes.shape({
        Name: React.PropTypes.string.isRequired,
        Notes: React.PropTypes.string,
        Complete: React.PropTypes.bool.isRequired
    }),
    handleNameEdit: React.PropTypes.func.isRequired,
    handleNotesEdit: React.PropTypes.func.isRequired,
    handleTaskDelete: React.PropTypes.func.isRequired
};

export default TaskTableTask;
