import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Filter from 'components/filter';
import FilterList from 'components/filter-list';
import Sidebar from 'components/sidebar';
import SidebarModule from 'components/sidebar-module';
import TaskGroupView from 'components/task-group-view';
import WorkspaceHeader from 'components/workspace-header';

import './main-layout.scss';

const MainLayout = ({ children, ...props }) => (
    <div className="main-layout">
        <Sidebar>
            <SidebarModule header="group">
                <FilterList>
                    <Filter name="all" />

                    {
                        MainLayout.taskGroups.map(taskGroup => {
                            return (
                                <Filter
                                    key={taskGroup.id}
                                    name={taskGroup.name}
                                    taskGroupId={taskGroup.id}
                                />
                            );
                        })
                    }
                </FilterList>
            </SidebarModule>

            <SidebarModule header="completion">
                <FilterList>
                    {
                        [['all', 'adjust'], ['incomplete', 'circle-o'], ['complete', 'circle']].map(pair => {
                            return (
                                <Filter
                                    completion={pair[0]}
                                    key={pair[0]}
                                    iconGlyph={pair[1]}
                                    name={pair[0]}
                                />
                            );
                        })
                    }
                </FilterList>
            </SidebarModule>
        </Sidebar>

        <div className="workspace">
            <WorkspaceHeader />
            <TaskGroupView taskGroup={MainLayout.taskGroups.find(tg => tg.id == props.match.params.taskGroupId) || { name: 'All task groups' }} />
        </div>
    </div>
);

MainLayout.taskGroups = [{
    id: 1,
    name: 'Taurus',
    description: 'Team Taurus lives forever'
}, {
    id: 2,
    name: 'Truck',
    description: 'Deez truck nuts'
}];

export default MainLayout;
