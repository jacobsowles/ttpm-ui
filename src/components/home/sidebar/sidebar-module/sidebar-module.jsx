// npm modules
import React from 'React';

// components
import SidebarModuleBody from './sidebar-module-body/sidebar-module-body.jsx';
import SidebarModuleHeader from './sidebar-module-header/sidebar-module-header.jsx';

// styles
require('./sidebar-module.scss');

class SidebarModule extends React.Component {
    render() {
        const sidebarModuleHeader =
            this.props.title
            ? <SidebarModuleHeader title={this.props.title} />
            : '';

        return (
            <div className="sidebar-module">
                {sidebarModuleHeader}
                <SidebarModuleBody>
                    {this.props.children}
                </SidebarModuleBody>
            </div>
        );
    }
}

SidebarModule.propTypes = {
    title: React.PropTypes.string
};

export default SidebarModule;
