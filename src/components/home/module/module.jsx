// npm modules
import React from 'React';

// components
import ModuleBody from './module-body/module-body.jsx';
import ModuleHeader from './module-header/module-header.jsx';

// styles
require('./module.scss');

class Module extends React.Component {
    render() {
        return (
            <div className={`module ${this.props.type}-module`}>
                {
                    this.props.title
                    ? <ModuleHeader
                        type={this.props.type}
                        title={this.props.title}
                    />
                    : ''
                }

                <ModuleBody type={this.props.type}>
                    {this.props.children}
                </ModuleBody>
            </div>
        );
    }
}

Module.propTypes = {
    type: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
};

export default Module;
