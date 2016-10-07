// npm modules
import React from 'react';

// components
import Module from '~/module/module.jsx';
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
            active: props.defaultActive
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <div id="analytics">
                <div className="drawer" style={this.state.active ? styles.active : styles.inactive}>
                {
                    this.props.tasks.length == 0
                    ? (
                        <div>
                            <p id="no-analytics-available">Let's be real: you haven't done anything yet. Add some tasks and we'll get you some neat data.</p>
                        </div>
                    )
                    : (
                        <div className="row">
                            <div className="col-xs-3 no-horizontal-padding">
                                <Module
                                    id="completion-module"
                                    type="analytics"
                                    title="Progress"
                                    iconClass="fa fa-check"
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
                                    iconClass="fa fa-hourglass-end"
                                >
                                    <TaskAge
                                        isVisible={this.state.active}
                                    />
                                </Module>
                            </div>*/}
                        </div>
                    )
                }
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
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    defaultActive: React.PropTypes.bool
};

Analytics.getDefaultProps = {
    defaultActive: true
};

export default Analytics;
