// npm modules
import React from 'React';

// components
import ViewContainer from '../../view-container';

// styles
require('./content.scss');

class Content extends React.Component {
    render() {
        return (
            <div id="content" className="col-md-9 col-md-offset-3">
                <ViewContainer defaultShowAnalytics={this.props.defaultShowAnalytics} />
            </div>
        );
    }
}

export default Content;
