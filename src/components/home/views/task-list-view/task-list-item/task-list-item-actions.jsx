import React, { Component, PropTypes } from 'react';
import ActionIcon from '~/icons/action-icon';

import contentTypes from '@/utils/task-list-item-content-types';

require('./task-list-item-actions.scss');

class TaskListItemActions extends Component {

    render() {
        return (
            <div className="task-list-item-actions">
                <ActionIcon
                    className={this.props.openContentType == contentTypes.DETAILS ? 'active' : ''}
                    glyph="file-text-o"
                    tooltip="details"
                    handleClick={() => this.props.handleClick(contentTypes.DETAILS)}
                />

                <ActionIcon
                    glyph="ellipsis-h"
                    tooltip="more"
                />
            </div>
        );
    }
}

TaskListItemActions.propTypes = {
    openContentType: PropTypes.string,
    handleClick: PropTypes.func.isRequired
};

export default TaskListItemActions;
