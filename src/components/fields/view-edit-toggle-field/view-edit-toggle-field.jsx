// npm modules
import React from 'react';

// styles
require('./view-edit-toggle-field.scss');

class ViewEditToggleField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasBeenSubmitted: false,
            isEditMode: false
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        this.state.hasBeenSubmitted = false;
    }

    handleFocus() {
        this.setState({
            isEditMode: true
        });
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                this.handleSubmit(event);
                break;
            }

            case 'Enter': {
                this.handleSubmit(event);
                break;
            }
        }
    }

    handleSubmit(event) {
        if (!this.state.hasBeenSubmitted) {
            this.state.hasBeenSubmitted = true;
            const value = event.target.value;
            event.target.blur();

            this.setState({
                isEditMode: false
            });

            if (value != '') {
                this.props.handleSubmit(value, this.props.includeWithSubmit);
            }
        }
    }

    render() {
        const stateClass = this.state.isEditMode ? 'view-edit-toggle-field-edit-mode' : 'view-edit-toggle-field';

        return (
            <div className={`${stateClass} ${this.props.type}-view-edit-toggle-field`}>
                <input
                    defaultValue={this.props.text}
                    onFocus={this.handleFocus}
                    onBlur={(event) => this.handleSubmit(event)}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

ViewEditToggleField.propTypes = {
    type: React.PropTypes.string,
    text: React.PropTypes.string,
    handleSubmit: React.PropTypes.func.isRequired,
    includeWithSubmit: React.PropTypes.object
};

ViewEditToggleField.getDefaultProps = {
    text: ''
};

export default ViewEditToggleField;
