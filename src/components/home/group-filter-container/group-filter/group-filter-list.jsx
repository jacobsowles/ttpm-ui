import React, { Component, PropTypes } from 'react';
import GroupFilter from './group-filter';
import NewTaskGroupLink from '../new-task-group-link';

require('./group-filter-list.scss');

class GroupFilterList extends Component {

    render() {
        return (
            <div className="group-filter-list">
                {
                    this.props.taskGroups
                        .filter(tg => tg.ParentTaskGroupId == this.props.taskGroupId)
                        .map((taskGroup, key) => {
                            return (
                                <GroupFilter
                                    key={key}
                                    taskGroupId={taskGroup.Id}
                                    taskGroupName={taskGroup.Name}
                                    taskGroups={this.props.taskGroups}
                                    handleAddTaskGroupClick={this.props.handleAddTaskGroupClick}
                                    handleTaskGroupClick={this.props.handleTaskGroupClick}
                                    handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                                    handleTaskGroupSave={this.props.handleTaskGroupSave}
                                />
                            );
                        })
                }

                <NewTaskGroupLink
                    taskGroupId={this.props.taskGroupId}
                    handleSubmit={this.props.handleAddTaskGroupClick}
                />
            </div>
        );
    }
}

GroupFilterList.propTypes = {
    taskGroupId: PropTypes.number,
    taskGroupName: PropTypes.string,
    taskGroups: PropTypes.arrayOf(React.PropTypes.object).isRequired,

    handleTaskGroupClick: PropTypes.func.isRequired,
    handleAddTaskGroupClick: PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupSave: PropTypes.func.isRequired
};

GroupFilterList.defaultProps = {
    taskGroupId: null
};

export default GroupFilterList;
