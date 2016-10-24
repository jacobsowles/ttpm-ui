// npm modules
import React from 'React';

// components
import GroupFilterContainer from '../../group-filter/group-filter-container';

// styles
require('./sidebar.scss');

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar col-md-3">
                <GroupFilterContainer />
            </div>
        );
    }
}

export default Sidebar;
