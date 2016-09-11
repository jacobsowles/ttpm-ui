// npm modules
import React from 'react';

// components
import Analytics from './analytics/analytics.jsx';
import Content from './content/content.jsx';
import ContentModuleCollection from './content/content-module-collection/content-module-collection.jsx';
import Header from './header/header.jsx';
import Logo from '../logo/logo.jsx';
import Module from '../module/module.jsx';
import ProjectFilterContainer from './project-filter-container/project-filter-container.jsx';
import Sidebar from './sidebar/sidebar.jsx';

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

                <Content>
                    <Header />
                    <ContentModuleCollection />
                    <Analytics />
                </Content>
            </div>
        );
    }
}

export default Home;
