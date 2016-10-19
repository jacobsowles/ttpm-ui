import React, { Component, PropTypes } from 'react';
import NavPill from '~/navigation/nav-pills/nav-pill';
import NavPillGroup from '~/navigation/nav-pills/nav-pill-group';

import { date } from '@/utils/filter-values';

class TaskListDateFilter extends Component {

    render() {
        return (
            <div className="filter task-list-date-filter">
                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-default"
                            isActive={this.props.activeFilter == date.ALL}
                            handleClick={() => this.props.handleFilterChange(date.ALL)}
                        >
                        all
                        </button>
                    </div>

                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-default"
                            isActive={this.props.activeFilter == date.TODAY}
                            handleClick={() => this.props.handleFilterChange(date.TODAY)}
                        >
                        today
                        </button>
                    </div>

                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-default"
                            isActive={this.props.activeFilter == date.TOMORROW}
                            handleClick={() => this.props.handleFilterChange(date.TOMORROW)}
                        >
                        tomorrow
                        </button>
                    </div>

                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-default"
                            isActive={this.props.activeFilter == date.UNPLANNED}
                            handleClick={() => this.props.handleFilterChange(date.UNPLANNED)}
                        >
                        unplanned
                        </button>
                    </div>
                </div>
            </div>
                // <NavPillGroup>
                //     <NavPill
                //         text="all"
                //         isActive={this.props.activeFilter == date.ALL}
                //         handleClick={() => this.props.handleFilterChange(date.ALL)}
                //     />
                //     <NavPill
                //         text="today"
                //         isActive={this.props.activeFilter == date.TODAY}
                //         handleClick={() => this.props.handleFilterChange(date.TODAY)}
                //     />
                //     <NavPill
                //         text="tomorrow"
                //         isActive={this.props.activeFilter == date.TOMORROW}
                //         handleClick={() => this.props.handleFilterChange(date.TOMORROW)}
                //     />
                //     <NavPill
                //         text="unplanned"
                //         isActive={this.props.activeFilter == date.UNPLANNED}
                //         handleClick={() => this.props.handleFilterChange(date.UNPLANNED)}
                //     />
                // </NavPillGroup>
        );
    }
}

TaskListDateFilter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListDateFilter;
