import React, { Component, PropTypes } from 'react';
import { Icon } from 'react-building-blocks';
import TextBox from '~/fields/text-box';

require('./group-filter-actions.scss');

class GroupFilterActions extends Component {
    render() {
        return (
            <span className="group-filter-actions">
                {
                    this.props.isEditMode
                        ? <Icon glyph="check" />
                        : <Icon glyph="pencil" onClick={() => this.props.setEditMode(true)} />
                }

                <Icon glyph="times" onClick={(event) => this.props.handleDelete(this.props.taskGroupId, event)} />
            </span>
        );
    }
}

GroupFilterActions.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
    taskGroupId: PropTypes.number.isRequired,

    setEditMode: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default GroupFilterActions;
