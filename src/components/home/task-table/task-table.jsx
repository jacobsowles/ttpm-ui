// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import LoadingGraphic from '../../loading-graphic/loading-graphic.jsx';
import TaskTableHeaderRow from './task-table-header-row/task-table-header-row.jsx';
import TaskTableRow from './task-table-row/task-table-row.jsx';

// actions
import taskActions from '../../../actions/task-actions.js';

// styles
require('./task-table.scss');

class TaskTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showLoadingGraphic: true
        };
    }

    componentWillMount() {
        this.props.fetchTasks();
    }

    componentDidMount() {
        this.state = {
            showLoadingGraphic: false
        };
    }

    render() {
        return (
            <div id="task-table" className="table-responsive">
                <LoadingGraphic showLoadingGraphic={this.state.showLoadingGraphic} />

                <table className="table table-striped">
                    <thead>
                        <TaskTableHeaderRow />
                    </thead>
                    <tbody>
                        {
                            this.props.filteredTasks.map(function(task, key) {
                                return (
                                    <TaskTableRow
                                        key={key}
                                        task={task}
                                        handleCompletionToggle={this.props.handleCompletionToggle}
                                    />
                                );
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

TaskTable.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    filteredTasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchTasks: React.PropTypes.func.isRequired,
    handleCompletionToggle: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks.tasks,
        filteredTasks: state.tasks.filteredTasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTasks: function() {
            dispatch(taskActions.fetchTasks());
        },

        handleCompletionToggle: function(taskId) {
            dispatch(taskActions.toggleComplete(taskId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);
