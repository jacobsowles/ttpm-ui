// npm modules
import React from 'react';

// components
import Analytics from './analytics/analytics.jsx';
import ContentPane from './content-pane/content-pane.jsx';
import ContentPaneModuleCollection from './content-pane/content-pane-module-collection/content-pane-module-collection.jsx';
import Header from './header/header.jsx';
import Logo from './logo/logo.jsx';
import Module from './module/module.jsx';
import ProjectFilterContainer from './project-filter-container/project-filter-container.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import StatusBox from './status-box/status-box.jsx';

// styles
require('./home.scss');

class Home extends React.Component {

    render() {
        return (
            <div className="row">
                <Sidebar>
                    <Module type="sidebar">
                        <Logo />
                    </Module>

                    <Module
                        type="sidebar"
                        title="Projects"
                    >
                        <ProjectFilterContainer />
                    </Module>
                </Sidebar>

                <ContentPane>
                    <Header />
                    <ContentPaneModuleCollection />
                    <Analytics />
                </ContentPane>
            </div>
        );
    }
}

export default Home;
