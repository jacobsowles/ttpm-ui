// npm modules
import React from 'React';

// components
import Module from '../../../module/module.jsx';
import TaskTable from '../../task-table/task-table.jsx';

// styles
require('./content-module-collection.scss');

class ContentModuleCollection extends React.Component {
    render() {
        const moduleType = 'content';

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

export default ContentModuleCollection;
