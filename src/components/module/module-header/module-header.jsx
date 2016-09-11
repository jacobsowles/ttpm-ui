// npm modules
import React from 'React';

// styles
require('./module-header.scss');

class ModuleHeader extends React.Component {
    render() {
        return (
            <div className={`module-header ${this.props.type}-module-header`}>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

ModuleHeader.propTypes = {
    type: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

export default ModuleHeader;
