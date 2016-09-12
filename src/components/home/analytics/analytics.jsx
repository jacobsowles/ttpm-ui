// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Module from '../../module/module.jsx';
import TaskAge from './task-age/task-age.jsx';
import TaskCompletion from './task-completion/task-completion.jsx';

// styles
require('./analytics.scss');

const styles = {
    active: {
        display: 'inherit'
    },
    inactive: {
        display: 'none'
    }
};

class Analytics extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const stateStyle = this.state.active ? styles.active : styles.inactive;

        return (
            <div id="analytics">
                <div className="drawer" style={stateStyle}>
                    <div className="row">
                        <div className="col-xs-3 no-horizontal-padding">
                            <Module
                                type="analytics"
                                title="Completion"
                            >
                                <TaskCompletion
                                    completedTaskCount={this.props.tasks.filter(t => t.Complete).length}
                                    totalTaskCount={this.props.tasks.length}
                                    isVisible={this.state.active}
                                />
                            </Module>
                        </div>

                        {/*<div className="col-xs-3">
                            <Module
                                id="task-age-module"
                                type="analytics"
                                title="Oldest Open Tasks"
                            >
                                <TaskAge
                                    isVisible={this.state.active}
                                />
                            </Module>
                        </div>*/}
                    </div>
                </div>
                <div className="toggle-bar">
                    <a className="toggle" onClick={this.handleClick}>
                        <span className="toggle-button">☰</span>
                        Analytics
                    </a>
                </div>
            </div>
        );
    }
}

Analytics.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks.filteredTasks
    };
}

export default connect(mapStateToProps)(Analytics);
