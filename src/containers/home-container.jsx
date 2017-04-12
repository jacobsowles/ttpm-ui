// node modules
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// app modules
import Logo from 'components/logo';
import PageInfo from 'components/page-info';
import PageNavigation from 'components/page-navigation';
import Sidebar from 'components/sidebar';
import SidebarModule from 'components/sidebar-module';
import TaskGroupFilter from 'components/task-group-filter';
import TaskGroupFilterList from 'components/task-group-filter-list';
import Workspace from 'components/workspace';
import WorkspaceHeader from 'components/workspace-header';

// actions
import authActions from 'actions/auth-actions';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <Sidebar header={<Logo theme="light" />}>
                    <SidebarModule header="group">
                        <TaskGroupFilterList>
                            {
                                this.props.taskGroups.map((taskGroup, index) => {
                                    return (
                                        <TaskGroupFilter
                                            id={taskGroup.id}
                                            key={index}
                                            name={taskGroup.name}
                                        />
                                    );
                                })
                            }
                        </TaskGroupFilterList>
                    </SidebarModule>
                </Sidebar>

                <Workspace>
                    <WorkspaceHeader />

                    <PageInfo
                        title="Taurus"
                        subtitle="Team Taurus lives forever"
                    />

                    <PageNavigation>
                        <Link to={`${this.props.location.pathname}?display=list`} activeClassName="active">List</Link>
                        <Link to={`${this.props.location.pathname}?display=kanban`} activeClassName="active">Kanban</Link>
                        <Link to={`${this.props.location.pathname}?display=feed`} activeClassName="active">Feed</Link>
                    </PageNavigation>
                </Workspace>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    taskGroups: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    })),

    handleLogout: PropTypes.func.isRequired
};

HomeContainer.defaultProps = {
    taskGroups: [{
            id: 1,
            name: 'Taurus'
        }, {
            id: 2,
            name: 'Truck'
        }
    ]
};

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogout: function() {
            dispatch(authActions.logout()).then(() => {
                window.location = '/login';
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
