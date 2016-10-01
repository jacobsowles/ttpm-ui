// npm modules
import React, { Component, PropTypes } from 'react';

// components
import Accordion from '~/accordion/accordion';
import AccordionItem from '~/accordion/accordion-item/accordion-item';
import TextBox from '~/fields/text-box';
import NewTaskGroupLink from '../new-task-group-link';

// styles
require('./group-filter.scss');

class GroupFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false
        };

        this.setEditMode = this.setEditMode.bind(this);
        this.handleNameSave = this.handleNameSave.bind(this);
    }

    setEditMode(mode) {
        this.setState({
            isEditMode: mode
        });
    }

    handleNameSave(event) {
        this.setEditMode(false);
        this.props.handleTaskGroupSave(this.props.taskGroup.Id, {
            Name: event.target.value
        });
    }

    render() {
        return (
            <Accordion>
                <AccordionItem
                    header={(
                        <div className="group-filter">
                            {
                                this.state.isEditMode
                                    ? (
                                        <TextBox
                                            value={this.props.taskGroup.Name}
                                            handleBlur={(event) => this.handleNameSave(event)}
                                        />
                                    )
                                    : (
                                        <span
                                            className="group-filter-name"
                                            onClick={() => this.props.handleTaskGroupClick(this.props.taskGroup.Id)}
                                        >
                                            {this.props.taskGroup.Name}
                                        </span>
                                    )
                            }

                            <span className="group-filter-actions">
                                <span
                                    className="edit-group"
                                    onClick={() => this.setEditMode(true)}
                                >
                                    &#9998;
                                </span>

                                <span
                                    className="delete-group"
                                    onClick={(event) => this.props.handleDeleteTaskGroupClick(this.props.taskGroup, event)}
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
                                            handleTaskGroupSave={this.props.handleTaskGroupSave}
                                        />
                                    );
                                })
                        }
                            <NewTaskGroupLink
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
    taskGroup: PropTypes.object.isRequired,
    taskGroups: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    level: PropTypes.number.isRequired,

    handleTaskGroupClick: PropTypes.func.isRequired,
    handleAddTaskGroupClick: PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupSave: PropTypes.func.isRequired
};

export default GroupFilter;
