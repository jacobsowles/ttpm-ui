import React, { Component, PropTypes } from 'react';
require('./filter-indicator.scss');

class FilterIndicator extends Component {

    render() {
        return (
            <div className="filter-indicator">
                {
                    this.props.taskGroupName
                        ? <span>showing tasks in the <strong>{this.props.taskGroupName}</strong> group | <a onClick={this.props.handleFilterClear}>show all tasks</a></span>
                        : <span>showing all tasks</span>
                }
            </div>
        );
    }
}

FilterIndicator.propTypes = {
    taskGroupName: PropTypes.string,
    handleFilterClear: PropTypes.func.isRequired
};

export default FilterIndicator;
