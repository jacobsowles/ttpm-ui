import React, { Component, PropTypes } from 'React';

require('./sidebar-module.scss');

class SidebarModule extends React.Component {
    render() {
        return (
            <div className="sidebar-module">
                { this.props.title ? <h2>{this.props.title}</h2> : null }
                { this.props.children }
            </div>
        );
    }
}

SidebarModule.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    title: PropTypes.string
};

export default SidebarModule;
