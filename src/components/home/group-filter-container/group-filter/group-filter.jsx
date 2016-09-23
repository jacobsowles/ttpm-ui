// npm modules
import React from 'react';

// components
import Accordion from '../../../accordion/accordion.jsx';
import AccordionItem from '../../../accordion/accordion-item/accordion-item.jsx';
import ViewEditToggleField from '../../../fields/view-edit-toggle-field/view-edit-toggle-field.jsx';

// styles
require('./group-filter.scss');

class GroupFilter extends React.Component {

    render() {
        return (
            <Accordion>
                <AccordionItem
                    header={(
                        <div className="group-filter">
                            <span
                                className="group-filter-name"
                                onClick={() => this.props.handleTaskGroupClick(this.props.taskGroup.Id)}
                            >
                                {this.props.taskGroup.Name}
                            </span>

                            <span className="group-filter-actions">
                                <span className="edit-group">&#9998;</span>

                                <span
                                    className="delete-group"
                                    onClick={(event) => this.props.handleDeleteTaskGroupClick(this.props.taskGroup.Id, event)}
                                >
                                    &times;
                                </span>
                            </span>
                        </div>
                    )}

                    body={(
                        <div style={{paddingLeft: `${20 * (this.props.level + 1)}px`}}>
                        {
                            this.props.taskGroups
                                .filter(tg => tg.ParentTaskGroupId == this.props.taskGroup.Id)
                                .map((taskGroup, key) => {
                                    return (
                                        <GroupFilter
                                            key={key}
                                            taskGroup={taskGroup}
                                            taskGroups={this.props.taskGroups}
                                            level={this.props.level}
                                            handleAddTaskGroupClick={this.props.handleAddTaskGroupClick}
                                            handleTaskGroupClick={this.props.handleTaskGroupClick}
                                            handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                                        />
                                    );
                                })
                        }
                            <ViewEditToggleField
                                type='task-group'
                                text='Add a new task group'
                                clearTextOnClick={true}
                                handleSubmit={this.props.handleAddTaskGroupClick}
                                includeWithSubmit={this.props.taskGroup}
                            />
                        </div>
                    )}
                />
            </Accordion>
        );
    }
}

GroupFilter.propTypes = {
    taskGroup: React.PropTypes.object.isRequired,
    taskGroups: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    level: React.PropTypes.number.isRequired,

    handleTaskGroupClick: React.PropTypes.func.isRequired,
    handleAddTaskGroupClick: React.PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: React.PropTypes.func.isRequired
};

export default GroupFilter;
