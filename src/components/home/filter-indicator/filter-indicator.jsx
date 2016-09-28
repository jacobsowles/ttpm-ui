import React from 'react';
require('./filter-indicator.scss');

class FilterIndicator extends React.Component {

    render() {
        return (
            <div className="filter-indicator">
                {
                    this.props.taskGroupName
                        ? <span>showing tasks in the <strong>{this.props.taskGroupName}</strong> group | <a href="/">show all tasks</a></span>
                        : <span>showing all tasks</span>
                }
            </div>
        );
    }
}

FilterIndicator.propTypes = {
    taskGroupName: React.PropTypes.string
};

export default FilterIndicator;
