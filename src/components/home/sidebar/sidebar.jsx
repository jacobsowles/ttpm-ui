import React, { Component, PropTypes } from 'React';
import LightLogo from '~/logo/light-logo';

class Sidebar extends Component {
    render() {
        return (
            <aside>
                <header>
                    <LightLogo />
                </header>

                <div>
                    {this.props.children}
                </div>
            </aside>
        );
    }
}

Sidebar.propTypes = {
    children: function(props, propName, componentName) {
        const prop = props[propName];
        let result;

        React.Children.forEach(prop, function(child) {
            if (child.type.displayName !== 'SidebarModule') {
                result = new Error('`' + componentName + '` only accepts children of type `SidebarModule`.');
            }
        });

        return result;
    }
};

export default Sidebar;
