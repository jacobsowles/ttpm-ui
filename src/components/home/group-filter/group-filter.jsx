// npm modules
import React, { Component, PropTypes } from 'react';

// components
import Accordion from '~/accordion/accordion';
import AccordionItem from '~/accordion/accordion-item';
import GroupFilterHeader from './group-filter-header';
import GroupFilterList from './group-filter-list';

// styles
require('./group-filter.scss');

class GroupFilter extends Component {

    render() {
        return (
            <Accordion>
                <AccordionItem
                    header={(
                        <GroupFilterHeader
                            taskGroupId={this.props.taskGroupId}
                            taskGroupName={this.props.taskGroupName}
                            handleTaskGroupClick={this.props.handleTaskGroupClick}
                            handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                            handleTaskGroupSave={this.props.handleTaskGroupSave}
                        />
                    )}

                    body={(
                        <GroupFilterList
                            taskGroupId={this.props.taskGroupId}
                            taskGroupName={this.props.taskGroupName}
                            taskGroups={this.props.taskGroups}
                            handleAddTaskGroupClick={this.props.handleAddTaskGroupClick}
                            handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                            handleSubmit={this.props.handleAddTaskGroupClick}
                            handleTaskGroupClick={this.props.handleTaskGroupClick}
                            handleTaskGroupOrderChange={this.props.handleTaskGroupOrderChange}
                            handleTaskGroupSave={this.props.handleTaskGroupSave}
                        />
                    )}
                />
            </Accordion>
        );
    }
}

GroupFilter.propTypes = {
    taskGroupId: PropTypes.number.isRequired,
    taskGroupName: PropTypes.string.isRequired,
    taskGroups: PropTypes.arrayOf(React.PropTypes.object).isRequired,

    handleAddTaskGroupClick: PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupOrderChange: PropTypes.func.isRequired,
    handleTaskGroupSave: PropTypes.func.isRequired
};

export default GroupFilter;
