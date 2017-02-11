// npm modules
import React from 'React';

// styles
require('./module-body.scss');

class ModuleBody extends React.Component {
    render() {
        return (
            <div className={`module-body ${this.props.type}-module-body`}>
                {this.props.children}
            </div>
        );
    }
}

ModuleBody.propTypes = {
    type: React.PropTypes.string.isRequired
};

export default ModuleBody;
