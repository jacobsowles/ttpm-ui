// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Module from '../../module/module.jsx';
import TaskCompletion from '../task-completion/task-completion.jsx';

// actions
import analyticsActions from './analytics-actions.js';

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
        this.bindKeyboardShortcuts();
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    bindKeyboardShortcuts() {
        document.onkeydown = function(e) {
            if (e.target.tagName.toLowerCase() != 'input') {
                switch (e.key) {
                    case 'a': {
                        this.handleClick();
                        return false;
                    }
                }
            }
        }.bind(this);
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
                                    completedTaskCount={this.props.completedTaskCount}
                                    totalTaskCount={this.props.totalTaskCount}
                                />
                            </Module>
                        </div>
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
    error: React.PropTypes.string.isRequired,
    completedTaskCount: React.PropTypes.number.isRequired,
    totalTaskCount: React.PropTypes.number.isRequired,

    refreshAnalytics: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        error: state.bottomDrawer.error,
        completedTaskCount: state.bottomDrawer.completedTaskCount,
        totalTaskCount: state.bottomDrawer.totalTaskCount
    };
}

function mapDispatchToProps(dispatch) {
    return {
        refreshAnalytics: function() {
            dispatch(analyticsActions.refreshAnalytics());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
