// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// app modules
import LoadingWrapper from '~/loading/loading-wrapper';
import TaskListView from './views/task-list-view/task-list-view';

// utils
import { completion, date, status } from '@/utils/filter-values';

class ViewWrapper extends Component {
    render() {
        return (
            <div style={{
                background: '#F7F7F7',
                height: 'calc(100vh - 100px - 40px)',
                padding: '30px'
            }}>
                <TaskListView
                    tasks={this.props.filteredTasks}
                    taskGroupName={this.props.taskGroupName}
                    isShowingOnlyCompleteTasks={this.props.filters.completion == completion.COMPLETE}
                    handleCompletionToggle={this.props.handleCompletionToggle}
                    handleNewTask={(task, newTaskInputField) => this.props.handleNewTask(task, this.props.filters.taskGroupId, newTaskInputField)}
                    handleTaskDelete={this.props.handleTaskDelete}
                    handleTaskSave={this.props.handleTaskSave}
                    updateDisplayOrder={this.props.updateDisplayOrder}
                />
            </div>
        );
    }
}

ViewWrapper.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    filteredTasks: PropTypes.arrayOf(PropTypes.object).isRequired,

    fetchTasks: PropTypes.func.isRequired,
    handleNewTask: PropTypes.func.isRequired,
    handleCompletionToggle: PropTypes.func.isRequired,
    handleTaskSave: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired
};

export default ViewWrapper;
