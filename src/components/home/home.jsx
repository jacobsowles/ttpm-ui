// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// components
import Content from './layout/content/content';
import GroupFilterContainer from './group-filter/group-filter-container';
import Header from './layout/header/header';
import LightLogo from '~/logo/light-logo';
import Module from '~/module/module';
import Sidebar from './layout/sidebar/sidebar';
import ViewContainer from './view-container';
import TaskSearch from './task-search/task-search';
import UserControls from './user-controls/user-controls';

// actions
import settingActions from '@/actions/setting-actions';
import userSettingActions from '@/actions/user-setting-actions';

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
                        <LightLogo />
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
                    <ViewContainer defaultShowAnalytics={this.props.defaultShowAnalytics} />
                </Content>
            </div>
        );
    }
}

function getAnalyticsDefault(userSettings, settings) {
    if (userSettings.defaultShowAnalytics) {
        return Boolean(userSettings.defaultShowAnalytics.Value);
    }

    return false; //Boolean(settings.defaultShowAnalytics.DefaultValue);
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

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(Home));
