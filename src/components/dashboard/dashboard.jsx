// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Header from './header/header.jsx';
import ProjectList from './project-list/project-list.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import SidebarModule from './sidebar/sidebar-module/sidebar-module.jsx';

class Dashboard extends React.Component {

    componentWillMount() {
    }

    render() {
        return (
            <div>
                <div className="col-xs-2">
                    <div className="row">
                        <Sidebar>
                            <SidebarModule title="Projects">
                                <ProjectList />
                            </SidebarModule>
                        </Sidebar>
                    </div>
                </div>

                <div className="col-xs-10">
                    <div className="row">
                        <Header />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
