// npm modules
import React from 'React';

class SidebarModuleHeader extends React.Component {
    render() {
        return (
            <h2>{this.props.title}</h2>
        );
    }
}

SidebarModuleHeader.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default SidebarModuleHeader;
