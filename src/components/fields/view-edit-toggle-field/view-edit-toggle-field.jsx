// npm modules
import React from 'react';

// styles
require('./view-edit-toggle-field.scss');

class ViewEditToggleField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFocus() {
        this.setState({
            isEditMode: true
        });
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
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
        element.blur();

        this.setState({
            isEditMode: false
        });

        if (value != '') {
            this.props.handleSubmit(value, this.props.includeWithSubmit);
        }
    }

    render() {
        const stateClass = this.state.isEditMode ? 'view-edit-toggle-field-edit-mode' : 'view-edit-toggle-field';

        return (
            <div className={`${stateClass} ${this.props.type}-view-edit-toggle-field`}>
                <input
                    defaultValue={this.props.text}
                    onFocus={this.handleFocus}
                    onBlur={(event) => this.handleSubmit(event.target)}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

ViewEditToggleField.propTypes = {
    type: React.PropTypes.string,
    text: React.PropTypes.string.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    includeWithSubmit: React.PropTypes.object
};

export default ViewEditToggleField;
