// npm modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import DateFilterCollection from './sidebar/date-filter-collection';
import GroupFilterContainer from './sidebar/group-filter/group-filter-container';
import Sidebar from './sidebar/sidebar';
import SidebarModule from './sidebar/sidebar-module';
import StatusFilterCollection from './sidebar/status-filter-collection';
import ViewContainer from './workspace/view-container';
import Workspace from './workspace/workspace';

class Home extends Component {
    render() {
        return (
            <div>
                <Sidebar>
                    <SidebarModule title="date">
                        <DateFilterCollection />
                    </SidebarModule>

                    <SidebarModule title="group">
                        <GroupFilterContainer />
                    </SidebarModule>

                    <SidebarModule title="status">
                        <StatusFilterCollection />
                    </SidebarModule>
                </Sidebar>

                <Workspace />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        filters: state.filters
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
