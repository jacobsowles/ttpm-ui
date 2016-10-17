import React, { Component, PropTypes } from 'react';
import NavPill from '~/navigation/nav-pills/nav-pill';
import NavPillGroup from '~/navigation/nav-pills/nav-pill-group';

import { completion, date } from '@/utils/filter-values';

class TaskListCompletionFilter extends Component {

    render() {
        return (
            <div className="task-list-completion-filter">
                <NavPillGroup>
                    <NavPill
                        text="all"
                        isActive={this.props.completionFilter == completion.ALL}
                        isEnabled={this.props.dateFilter != date.TOMORROW}
                        handleClick={() => this.props.handleFilterChange(completion.ALL)}
                    />
                    <NavPill
                        text="complete"
                        isActive={this.props.completionFilter == completion.COMPLETE}
                        isEnabled={this.props.dateFilter != date.TOMORROW}
                        handleClick={() => this.props.handleFilterChange(completion.COMPLETE)}
                    />
                    <NavPill
                        text="incomplete"
                        isActive={this.props.completionFilter == completion.INCOMPLETE}
                        handleClick={() => this.props.handleFilterChange(completion.INCOMPLETE)}
                    />
                </NavPillGroup>
            </div>
        );
    }
}

TaskListCompletionFilter.propTypes = {
    completionFilter: PropTypes.string.isRequired,
    dateFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListCompletionFilter;
