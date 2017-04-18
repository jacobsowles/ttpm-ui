// node modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// app components
import TaskList from 'components/task-list';

class TaskListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TaskList
                tasks={this.props.tasks}
            />
        );
    }
}

TaskListContainer.propTypes = {
};

function mapStateToProps(state) {
    return {
        tasks: [{
                id: 1,
                isComplete: false,
                name: 'Change oil',
                description: 'Use 10W-30 high mileage'
            }, {
                id: 2,
                isComplete: false,
                name: 'Inflate tires'
            }
        ]
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
