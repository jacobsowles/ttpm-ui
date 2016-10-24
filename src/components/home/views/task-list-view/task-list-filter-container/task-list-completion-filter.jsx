import React, { Component, PropTypes } from 'react';
import NavPill from '~/navigation/nav-pills/nav-pill';
import NavPillGroup from '~/navigation/nav-pills/nav-pill-group';

import { completion, date, status } from '@/utils/filter-values';

class TaskListCompletionFilter extends Component {

    render() {
        return (
            <div className="filter task-list-completion-filter">
                <NavPillGroup>
                    <NavPill
                        text="complete"
                        isActive={this.props.completionFilter == completion.COMPLETE}
                        isEnabled={
                            this.props.completionFilter != completion.INCOMPLETE &&
                            !this.props.dateFilters.includes(date.TOMORROW)
                        }
                        handleClick={() => this.props.handleFilterChange(completion.COMPLETE)}
                    />
                    <NavPill
                        text="incomplete"
                        isActive={this.props.completionFilter == completion.INCOMPLETE}
                        isEnabled={this.props.completionFilter != completion.COMPLETE}
                        handleClick={() => this.props.handleFilterChange(completion.INCOMPLETE)}
                    />
                </NavPillGroup>
            </div>
        );
    }
}

TaskListCompletionFilter.propTypes = {
    completionFilter: PropTypes.string.isRequired,
    dateFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    statusFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default TaskListCompletionFilter;
