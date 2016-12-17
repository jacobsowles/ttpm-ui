import React, { Component, PropTypes } from 'react';

require('./group-filter-list.scss');

class GroupFilterList extends Component {

    render() {
        return (
            <div className="group-filter-list">
                {this.props.children}
            </div>
        );
    }
}

GroupFilterList.propTypes = {
};

export default GroupFilterList;
