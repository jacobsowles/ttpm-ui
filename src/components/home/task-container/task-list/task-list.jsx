// npm modules
import React from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// components
import DraggableList from '~/draggable/draggable-list/draggable-list';
import DraggableListItem from '~/draggable/draggable-list/draggable-list-item';
import FilterIndicator from '~/home/filter-indicator/filter-indicator';
import TaskListItem from './task-list-item/task-list-item';
import TaskListNewItem from './task-list-new-item/task-list-new-item';

// actions
import filterActions from '@/actions/filter-actions.js';

// styles
require('./task-list.scss');

class TaskList extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="task-list">
                        <FilterIndicator taskGroupName={this.props.taskGroupName} />

                        <DraggableList
                            items={this.props.tasks}
                            updateDisplayOrder={this.props.updateDisplayOrder}
                        >
                            {
                                this.props.tasks.map((task, key) => {
                                    return (
                                        <TaskListItem
                                            key={key}
                                            task={task}
                                            handleCompletionToggle={this.props.handleCompletionToggle}
                                            handleNameEdit={this.props.handleTaskNameEdit}
                                            handleNotesEdit={this.props.handleTaskNotesEdit}
                                            handleTaskDelete={this.props.handleTaskDelete}
                                        />
                                    );
                                })
                            }
                        </DraggableList>

                        <TaskListNewItem handleNewTask={this.props.handleNewTask} />
                    </div>
                </div>
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    taskGroupName: React.PropTypes.string,

    handleNewTask: React.PropTypes.func.isRequired,
    handleCompletionToggle: React.PropTypes.func.isRequired,
    handleTaskNameEdit: React.PropTypes.func.isRequired,
    handleTaskNotesEdit: React.PropTypes.func.isRequired,
    updateDisplayOrder: React.PropTypes.func.isRequired
};

export default TaskList;
