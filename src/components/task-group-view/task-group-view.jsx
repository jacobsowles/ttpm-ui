import React from 'react';

import DisplayWrapper from 'components/display-wrapper';
import PageHeader from 'components/page-header';
import PageInfo from 'components/page-info';
import TaskListContainer from 'containers/task-list-container';

import './task-group-view.scss';

const TaskGroupView = props => (
    <div className="task-group-view">
        <PageHeader>
            <PageInfo
                title={props.taskGroup.name}
                subtitle={props.taskGroup.description}
            />

            {/*<PageNavigation>
                <Link to={`${this.props.location.pathname}?display=list`} activeClassName="active">List</Link>
                <Link to={`${this.props.location.pathname}?display=kanban`} activeClassName="active">Kanban</Link>
                <Link to={`${this.props.location.pathname}?display=feed`} activeClassName="active">Feed</Link>
            </PageNavigation>*/}
        </PageHeader>

        <DisplayWrapper>
            <TaskListContainer tasks={props.tasks} />
        </DisplayWrapper>
    </div>
);

export default TaskGroupView;
