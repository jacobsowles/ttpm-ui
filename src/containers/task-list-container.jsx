import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskList from 'components/task-list';

class TaskListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TaskList tasks={this.props.tasks} />
        );
    }
}

TaskListContainer.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
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
