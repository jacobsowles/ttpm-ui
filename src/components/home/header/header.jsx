// npm modules
import React from 'React';

// components
import TaskSearch from '../../task-search/task-search.jsx';

// styles
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <TaskSearch />
            </div>
        );
    }
}

export default Header;
