// npm modules
import React from 'react';
import _ from 'lodash';

// styles
require('./add-new.scss');

const styles = {
    show: {
        display: 'inherit'
    },
    hide: {
        display: 'none'
    }
};

class AddNew extends React.Component {

    constructor() {
        // TODO: Rename this to something other than 'add new', since it will likely be used in other places for different purposes.
        super();

        this.state = {
            active: false,
            id: _.uniqueId('add-new-input-')
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.bindKeyboardShortcuts();
    }

    componentDidUpdate(prevProps, prevState) {
        const input = document.getElementById(this.state.id);
        input.focus();
    }

    handleClick() {
        this.setState({
            active: true
        });
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                event.target.value = '';
                this.handleSubmit(event.target);
                break;
            }

            case 'Enter': {
                this.handleSubmit(event.target);
                break;
            }
        }
    }

    handleSubmit(element) {
        const value = element.value;
        element.value = '';

        this.setState({
            active: false
        });

        if (value != '') {
            this.props.handleSubmit(value, this.props.includeWithSubmit);
        }
    }

    bindKeyboardShortcuts() {
        document.onkeydown = function(e) {
            if (e.target.tagName.toLowerCase() != 'input') {
                switch (e.key) {
                    case 'p': {
                        this.handleClick();
                        return false;
                    }
                }
            }
        }.bind(this);
    }

    render() {
        return (
            <div className={`add-new ${this.props.class}`}>
                <section style={this.state.active ? styles.show : styles.hide}>
                    <input
                        id={this.state.id}
                        onBlur={(event) => this.handleSubmit(event.target)}
                        onKeyDown={this.handleKeyDown}
                    />
                </section>
                <section style={this.state.active ? styles.hide : styles.show}>
                    <a onClick={this.handleClick}>
                        + Add a new {this.props.entity}
                    </a>
                </section>
            </div>
        );
    }
}

AddNew.propTypes = {
    entity: React.PropTypes.string.isRequired,
    class: React.PropTypes.string,
    handleSubmit: React.PropTypes.func.isRequired,
    includeWithSubmit: React.PropTypes.object
};

export default AddNew;
