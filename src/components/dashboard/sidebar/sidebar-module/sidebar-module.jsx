// npm modules
import React from 'React';

// components
import SidebarModuleHeader from './sidebar-module-header/sidebar-module-header.jsx';

class SidebarModule extends React.Component {
    render() {
        return (
            <div>
                <SidebarModuleHeader title={this.props.title} />
                {this.props.children}
            </div>
        );
    }
}

SidebarModule.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default SidebarModule;
