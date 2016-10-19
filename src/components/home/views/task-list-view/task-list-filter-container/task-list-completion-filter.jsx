import React, { Component, PropTypes } from 'react';
import NavPill from '~/navigation/nav-pills/nav-pill';
import NavPillGroup from '~/navigation/nav-pills/nav-pill-group';

import { completion, date, status } from '@/utils/filter-values';

class TaskListCompletionFilter extends Component {

    render() {
        return (
            <div className="filter task-list-completion-filter">
                <div className="btn-group btn-group-justified" role="group">
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-default"
                            isActive={this.props.completionFilter == completion.ALL}
                            isEnabled={this.props.dateFilter != date.TOMORROW && this.props.statusFilter != status.BLOCKED}
                            handleClick={() => this.props.handleFilterChange(completion.ALL)}
                        >
                        all
                        </button>
                    </div>

                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-default"
                            isActive={this.props.completionFilter == completion.COMPLETE}
                            isEnabled={this.props.dateFilter != date.TOMORROW && this.props.statusFilter != status.BLOCKED}
                            handleClick={() => this.props.handleFilterChange(completion.COMPLETE)}
                        >
                        complete
                        </button>
                    </div>

                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-default"
                            isActive={this.props.completionFilter == completion.INCOMPLETE}
                            handleClick={() => this.props.handleFilterChange(completion.INCOMPLETE)}
                        >
                        incomplete
                        </button>
                    </div>
                </div>
            </div>

            //     <NavPillGroup>
            //         <NavPill
            //             text="all"
            //             isActive={this.props.completionFilter == completion.ALL}
            //             isEnabled={this.props.dateFilter != date.TOMORROW && this.props.statusFilter != status.BLOCKED}
            //             handleClick={() => this.props.handleFilterChange(completion.ALL)}
            //         />
            //         <NavPill
            //             text="complete"
            //             isActive={this.props.completionFilter == completion.COMPLETE}
            //             isEnabled={this.props.dateFilter != date.TOMORROW && this.props.statusFilter != status.BLOCKED}
            //             handleClick={() => this.props.handleFilterChange(completion.COMPLETE)}
            //         />
            //         <NavPill
            //             text="incomplete"
            //             isActive={this.props.completionFilter == completion.INCOMPLETE}
            //             handleClick={() => this.props.handleFilterChange(completion.INCOMPLETE)}
            //         />
            //     </NavPillGroup>
        );
    }
}

TaskListCompletionFilter.propTypes = {
    completionFilter: PropTypes.string.isRequired,
    dateFilter: PropTypes.string.isRequired,
    statusFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListCompletionFilter;
