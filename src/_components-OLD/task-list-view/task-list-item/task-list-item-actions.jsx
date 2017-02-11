import React, { Component, PropTypes } from 'react';
import DropdownMenuItem from '~/dropdown-menu/dropdown-menu-item';
import { Icon } from 'react-building-blocks';
import MoreDropdownMenu from '~/dropdown-menu/more-dropdown-menu';

import contentTypes from '@/utils/task-list-item-content-types';

require('./task-list-item-actions.scss');

class TaskListItemActions extends Component {
    render() {
        return (
            <div className="task-list-item-actions">
                <Icon
                    className={this.props.openContentType == contentTypes.DETAILS ? 'active' : ''}
                    glyph="file-text-o"
                    title="details"
                    onClick={() => this.props.handleClick(contentTypes.DETAILS)}
                />

                <MoreDropdownMenu pixelsFromRightEdge={75}>
                    <DropdownMenuItem handleClick={this.props.handleDelete}>Delete</DropdownMenuItem>
                </MoreDropdownMenu>
            </div>
        );
    }
}

TaskListItemActions.propTypes = {
    openContentType: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default TaskListItemActions;
