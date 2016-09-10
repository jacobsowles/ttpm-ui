// npm modules
import React from 'React';

// components
import Module from '../../module/module.jsx';
import TaskTable from '../../task-table/task-table.jsx';

// styles
require('./content-pane-module-collection.scss');

class ContentPaneModuleCollection extends React.Component {
    render() {
        const moduleType = 'content-pane';

        return (
            <div className="row">
                <div className="col-xs-12">
                    <Module type={moduleType}>
                        <TaskTable />
                    </Module>
                </div>
            </div>
        );
    }
}

export default ContentPaneModuleCollection;
