import React, { Component, PropTypes } from 'react';
import NavPill from '~/navigation/nav-pills/nav-pill';
import NavPillGroup from '~/navigation/nav-pills/nav-pill-group';

import { completion } from '@/utils/filter-values';

require('./task-list-completion-filter.scss');

class TaskListCompletionFilter extends Component {

    render() {
        return (
            <div className="task-list-completion-filter">
                <NavPillGroup>
                    <NavPill
                        text="complete"
                        isActive={this.props.activeFilter == completion.COMPLETE}
                        handleClick={() => this.props.handleFilterChange(completion.COMPLETE)}
                    />
                    <NavPill
                        text="incomplete"
                        isActive={this.props.activeFilter == completion.INCOMPLETE}
                        handleClick={() => this.props.handleFilterChange(completion.INCOMPLETE)}
                    />
                    <NavPill
                        text="all"
                        isActive={this.props.activeFilter == completion.ALL}
                        handleClick={() => this.props.handleFilterChange(completion.ALL)}
                    />
                </NavPillGroup>
            </div>
        );
    }
}

TaskListCompletionFilter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListCompletionFilter;
