// npm modules
import React from 'react';
import { connect } from 'react-redux';

// components
import Content from './content/content.jsx';
import GroupFilterContainer from './group-filter-container/group-filter-container.jsx';
import Header from './header/header.jsx';
import Logo from '../logo/logo.jsx';
import Module from '../module/module.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import TaskContainer from './task-container/task-container.jsx';
import TaskSearch from './task-search/task-search.jsx';
import UserControls from './user-controls/user-controls.jsx';

// actions
import settingActions from '../../actions/setting-actions.js';
import userSettingActions from '../../actions/user-setting-actions.js';

class Home extends React.Component {

    componentWillMount() {
        this.props.fetchUserSettings();
        this.props.fetchSettings();
    }

    render() {
        return (
            <div className="row">
                <Sidebar>
                    <Module type="sidebar">
                        <Logo />
                    </Module>

                    <Module
                        type="sidebar"
                        title="Groups"
                        iconClass="fa fa-folder-open-o"
                    >
                        <GroupFilterContainer />
                    </Module>
                </Sidebar>

                <Content>
                    <Header>
                        <TaskSearch />
                        <UserControls />
                    </Header>
                    <TaskContainer defaultShowAnalytics={this.props.defaultShowAnalytics} />
                </Content>
            </div>
        );
    }
}

function getAnalyticsDefault(userSettings, settings) {
    if (userSettings.defaultShowAnalytics) {
        return Boolean(userSettings.defaultShowAnalytics.Value);
    }

    return Boolean(settings.defaultShowAnalytics.DefaultValue);
}

function mapStateToProps(state) {
    return {
        defaultShowAnalytics: getAnalyticsDefault(state.userSettings, state.settings)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSettings: function() {
            dispatch(settingActions.fetchSettings());
        },

        fetchUserSettings: function() {
            dispatch(userSettingActions.fetchUserSettings());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
