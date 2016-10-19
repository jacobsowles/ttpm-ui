import React, { Component, PropTypes } from 'react';
import DraggableList from '~/draggable/draggable-list/draggable-list';
import DraggableListItem from '~/draggable/draggable-list/draggable-list-item';
import GroupFilter from './group-filter';
import NewTaskGroupLink from './new-task-group-link';

require('./group-filter-list.scss');

class GroupFilterList extends Component {

    render() {
        return (
            <div className="group-filter-list">
                <DraggableList>
                    {
                        this.props.taskGroups
                            .filter(tg => tg.ParentTaskGroupId == this.props.taskGroupId)
                            .map((taskGroup, index) => {
                                return (
                                    <DraggableListItem
                                        key={index}
                                        index={index}
                                        id={taskGroup.Id}
                                        moveItem={this.props.handleTaskGroupOrderChange}
                                    >
                                        <GroupFilter
                                            key={index}
                                            taskGroupId={taskGroup.Id}
                                            taskGroupName={taskGroup.Name}
                                            taskGroups={this.props.taskGroups}
                                            handleAddTaskGroupClick={this.props.handleAddTaskGroupClick}
                                            handleDeleteTaskGroupClick={this.props.handleDeleteTaskGroupClick}
                                            handleTaskGroupClick={this.props.handleTaskGroupClick}
                                            handleTaskGroupOrderChange={this.props.handleTaskGroupOrderChange}
                                            handleTaskGroupSave={this.props.handleTaskGroupSave}
                                        />
                                    </DraggableListItem>
                                );
                            })
                    }
                </DraggableList>

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

    handleAddTaskGroupClick: PropTypes.func.isRequired,
    handleDeleteTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupClick: PropTypes.func.isRequired,
    handleTaskGroupOrderChange: PropTypes.func.isRequired,
    handleTaskGroupSave: PropTypes.func.isRequired
};

GroupFilterList.defaultProps = {
    taskGroupId: null
};

export default GroupFilterList;
