// npm modules
import React, { Component, PropTypes } from 'react';

// components
import CheckmarkIcon from '~/icons/checkmark-icon';
import PencilIcon from '~/icons/pencil-icon';
import TextBox from '~/fields/text-box';
import TimesIcon from '~/icons/times-icon';

// styles
require('./group-filter-actions.scss');

class GroupFilterActions extends Component {

    render() {
        return (
            <span className="group-filter-actions">
                {this.props.isEditMode ? <CheckmarkIcon /> : <PencilIcon handleClick={() => this.props.setEditMode(true)} />}
                <TimesIcon handleClick={(event) => this.props.handleDelete(this.props.taskGroupId, event)} />
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
