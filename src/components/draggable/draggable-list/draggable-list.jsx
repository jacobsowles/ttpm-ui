// npm modules
import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableListItem from './draggable-list-item';

// styles
require('./draggable-list.scss');

class DraggableList extends Component {

    constructor(props) {
        super(props);
        this.moveItem = this.moveItem.bind(this);
    }

    moveItem(dragIndex, dropIndex) {
        this.props.updateDisplayOrder(this.props.items[dragIndex], this.props.items[dropIndex]);
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map((item, key) => {
                        return (
                            <DraggableListItem
                                key={item.Id}
                                index={key}
                                id={item.Id}
                                item={item}
                                moveItem={this.moveItem}
                            >
                                {this.props.children[key]}
                            </DraggableListItem>
                        );
                    })
                }
            </div>
        );
    }
}

DraggableList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateDisplayOrder: PropTypes.func.isRequired
};

export default DragDropContext(HTML5Backend)(DraggableList);
