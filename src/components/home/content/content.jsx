// npm modules
import React from 'React';

// styles
require('./content.scss');

class Content extends React.Component {
    render() {
        return (
            <div id="content">
                {this.props.children}
            </div>
        );
    }
}

export default Content;
