// npm modules
import React from 'React';

// styles
require('./content-pane.scss');

class ContentPane extends React.Component {
    render() {
        return (
            <div id="content-pane">
                {this.props.children}
            </div>
        );
    }
}

export default ContentPane;
