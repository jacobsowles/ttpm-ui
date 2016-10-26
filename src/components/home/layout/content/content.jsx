import React from 'React';
import ViewContainer from '../../view-container';

require('./content.scss');

class Content extends React.Component {
    render() {
        return (
            <div id="content" className="col-md-10 col-md-offset-2">
                <ViewContainer />
            </div>
        );
    }
}

export default Content;
