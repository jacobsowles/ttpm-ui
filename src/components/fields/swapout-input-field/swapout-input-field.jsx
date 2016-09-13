// npm modules
import React from 'react';
import _ from 'lodash';

// styles
require('./swapout-input-field.scss');

const styles = {
    show: {
        display: 'inherit'
    },
    hide: {
        display: 'none'
    }
};

class SwapoutInputField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            id: _.uniqueId('swapout-input-field-')
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        return (
            <div className={`swapout-input-field ${this.props.type}-swapout-input-field`}>
                <section style={this.state.active ? styles.show : styles.hide}>
                    <input
                        id={this.state.id}
                        onBlur={(event) => this.handleSubmit(event.target)}
                        onKeyDown={this.handleKeyDown}
                    />
                </section>
                <section style={this.state.active ? styles.hide : styles.show}>
                    <span onClick={this.handleClick}>
                        {this.props.text}
                    </span>
                </section>
            </div>
        );
    }
}

SwapoutInputField.propTypes = {
    type: React.PropTypes.string,
    text: React.PropTypes.string.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    includeWithSubmit: React.PropTypes.object
};

export default SwapoutInputField;
