import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableListItem from './draggable-list-item';

require('./draggable-list.scss');

class DraggableList extends Component {

    render() {
        return (
            <div className="draggable-list">
                {this.props.children}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(DraggableList);
