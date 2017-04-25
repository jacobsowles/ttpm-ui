// node modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// app containers
import TaskListContainer from 'containers/task-list-container';

// app components
import DisplayWrapper from 'components/display-wrapper';
import Filter from 'components/filter';
import FilterList from 'components/filter-list';
import HomeWrapper from 'components/home-wrapper';
import PageHeader from 'components/page-header';
import PageInfo from 'components/page-info';
import PageNavigation from 'components/page-navigation';
import Sidebar from 'components/sidebar';
import SidebarModule from 'components/sidebar-module';
import Workspace from 'components/workspace';
import WorkspaceHeader from 'components/workspace-header';

// actions
import authActions from 'actions/auth-actions';

class HomeContainer extends Component {
    render() {
        return (
            <HomeWrapper>
                <Sidebar>
                    <SidebarModule header="group">
                        <FilterList>
                            <Filter
                                completion={this.props.location.query.completion}
                                name="all"
                            />

                            {
                                this.props.taskGroups.map(taskGroup => {
                                    return (
                                        <Filter
                                            completion={this.props.location.query.completion}
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
                                            taskGroupId={this.props.params.taskGroupId}
                                        />
                                    );
                                })
                            }
                        </FilterList>
                    </SidebarModule>
                </Sidebar>

                <Workspace>
                    <WorkspaceHeader />

                    <PageHeader>
                        <PageInfo
                            title="Taurus"
                            subtitle="Team Taurus lives forever"
                        />

                        {/*<PageNavigation>
                            <Link to={`${this.props.location.pathname}?display=list`} activeClassName="active">List</Link>
                            <Link to={`${this.props.location.pathname}?display=kanban`} activeClassName="active">Kanban</Link>
                            <Link to={`${this.props.location.pathname}?display=feed`} activeClassName="active">Feed</Link>
                        </PageNavigation>*/}
                    </PageHeader>

                    <DisplayWrapper>
                        <TaskListContainer tasks={this.props.tasks} />
                    </DisplayWrapper>
                </Workspace>
            </HomeWrapper>
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
