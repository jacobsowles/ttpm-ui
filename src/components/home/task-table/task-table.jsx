// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import LoadingGraphic from '../../loading-graphic/loading-graphic.jsx';
import TaskTableHeaderRow from './task-table-header-row/task-table-header-row.jsx';
import TaskTableRow from './task-table-row/task-table-row.jsx';

// actions
import taskTableActions from './task-table-actions.js';

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
        this.props.fetchTaskTable();
    }

    componentDidMount() {
        this.state = {
            showLoadingGraphic: false
        };
    }

    render() {
        return (
            <div id="task-table" className="table-responsive">
                {this.props.error}
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
                                    />
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

TaskTable.propTypes = {
    error: React.PropTypes.string.isRequired,
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    filteredTasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

    fetchTaskTable: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        error: state.taskTable.error,
        tasks: state.taskTable.tasks,
        filteredTasks: state.taskTable.filteredTasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTaskTable: function() {
            dispatch(taskTableActions.fetchTaskTable());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);
