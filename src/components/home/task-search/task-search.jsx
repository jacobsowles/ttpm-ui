// npm modules
import React from 'React';

// styles
require('./task-search.scss');

class TaskSearch extends React.Component {
    render() {
        return (
            <div id="task-search" className="form-inline">
                {/*<input type="text" className="form-control" placeholder="Search" />*/}
            </div>
        );
    }
}

export default TaskSearch;
