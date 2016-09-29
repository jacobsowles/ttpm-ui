import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { DraggableItemType } from '../draggable-item-type';
import TaskListItem from '~/home/task-container/task-list/task-list-item/task-list-item';

require('./draggable-list-item.scss');

const taskSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index
        };
    }
};

const taskTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveItem(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    }
};

function dragSourceCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

function dropTargetCollect(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

class DraggableListItem extends Component {

    render() {
        return this.props.connectDragSource(this.props.connectDropTarget(
            <div style={{
                opacity: this.props.isDragging ? 0.5 : 1,
                cursor: 'move'
            }}>
                {this.props.children}
            </div>
        ));
    }
}

DraggableListItem.propTypes = {
    children: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    moveItem: PropTypes.func.isRequired
};

export default
    DragSource(DraggableItemType.TASK, taskSource, dragSourceCollect)(
        DropTarget(DraggableItemType.TASK, taskTarget, dropTargetCollect)(
            DraggableListItem
        )
    );
