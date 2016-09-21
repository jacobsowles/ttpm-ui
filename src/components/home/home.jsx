// npm modules
import React from 'react';

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

                    <TaskContainer />
                </Content>
            </div>
        );
    }
}

export default Home;
