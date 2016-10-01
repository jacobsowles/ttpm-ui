// npm modules
import React, { Component, PropTypes } from 'react';

// components
import Accordion from '~/accordion/accordion';
import AccordionItem from '~/accordion/accordion-item';
import CheckmarkIcon from '~/icons/checkmark-icon';
import PencilIcon from '~/icons/pencil-icon';
import TextBox from '~/fields/text-box';
import TimesIcon from '~/icons/times-icon';
import NewTaskGroupLink from '../new-task-group-link';

// styles
require('./group-filter.scss');

class GroupFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false
        };

        this.handleNameSave = this.handleNameSave.bind(this);
        this.setEditMode = this.setEditMode.bind(this);
        this.switchToEditMode = this.switchToEditMode.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isEditMode) {
            document.getElementById(`group-filter-${this.props.taskGroup.Id}`).focus();
        }
    }

    setEditMode(mode) {
        this.setState({
            isEditMode: mode
        });
    }

    switchToEditMode() {
        this.setEditMode(true);
    }

    handleNameSave(event) {
        this.setEditMode(false);
        this.props.handleTaskGroupSave(this.props.taskGroup.Id, {
            Name: event.target.value
        });
    }

    render() {
        const paddingLeft = 20 * (this.props.level + 1);

        return (
            <Accordion>
                <AccordionItem
                    header={(
                        <div className="group-filter">
                            {
                                this.state.isEditMode
                                    ? (
                                        <TextBox
                                            id={`group-filter-${this.props.taskGroup.Id}`}
                                            style={{width: `${195 - paddingLeft}px`}}
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
                                {this.state.isEditMode ? <CheckmarkIcon /> : <PencilIcon handleClick={() => this.switchToEditMode()} />}
                                <TimesIcon handleClick={(event) => this.props.handleDeleteTaskGroupClick(this.props.taskGroup, event)} />
                            </span>
                        </div>
                    )}

                    body={(
                        <div style={{paddingLeft: `${paddingLeft}px`}}>
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
