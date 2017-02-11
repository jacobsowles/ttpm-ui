// npm modules
import React from 'React';

// styles
require('./module-header.scss');

class ModuleHeader extends React.Component {
    render() {
        let icon;

        if (this.props.iconClass) {
            icon = <i className={this.props.iconClass} aria-hidden="true"></i>;
        }

        return (
            <div className={`module-header ${this.props.type}-module-header`}>
                {icon}
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

ModuleHeader.propTypes = {
    type: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    iconClass: React.PropTypes.string
};

export default ModuleHeader;
