// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Header from './header/header.jsx';
import ProjectList from './project-list/project-list.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import SidebarModule from './sidebar/sidebar-module/sidebar-module.jsx';
import StatusBox from './status-box/status-box.jsx';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="row">
                <Sidebar>
                    <SidebarModule>
                        <StatusBox
                            currentPoints={150}
                            maxPoints={200}
                            level={8}
                        />
                    </SidebarModule>

                    <SidebarModule title="Projects">
                        <ProjectList />
                    </SidebarModule>
                </Sidebar>

                <div className="content-pane">
                    <Header />
                </div>
            </div>
        );
    }
}

export default Dashboard;
