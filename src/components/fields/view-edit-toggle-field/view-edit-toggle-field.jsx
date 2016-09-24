// npm modules
import React from 'react';

// styles
require('./view-edit-toggle-field.scss');

class ViewEditToggleField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.text,
            hasBeenSubmitted: false,
            shouldSubmit: true,
            isEditMode: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        this.state.hasBeenSubmitted = false;
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleFocus() {
        this.setState({
            isEditMode: true,
            value: this.props.clearTextOnClick ? '' : this.props.text
        });
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                this.setState({
                    value: this.props.text
                });
                this.state.shouldSubmit = false;
                event.target.blur();
                break;
            }

            case 'Enter': {
                this.state.shouldSubmit = true;
                this.handleSubmit(event);
                break;
            }
        }
    }

    handleSubmit(event) {
        if (!this.state.hasBeenSubmitted && this.state.shouldSubmit) {
            this.state.hasBeenSubmitted = true;
            event.target.blur();

            this.setState({
                isEditMode: false
            });

            if (event.target.value != '') {
                this.props.handleSubmit(event.target.value, this.props.includeWithSubmit);
            }

            if (this.props.resetToOriginalOnSubmit) {
                this.setState({
                    value: this.props.text
                });
            }
        }
    }

    render() {
        const stateClass = this.state.isEditMode ? 'view-edit-toggle-field-edit-mode' : 'view-edit-toggle-field';

        return (
            <div className={`${stateClass} ${this.props.type}-view-edit-toggle-field`}>
                {
                    this.props.isReadOnly
                        ? <input type="text" value={this.props.task.Name} disabled />
                        : (
                            <input
                                value={this.state.value}
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={(event) => this.handleSubmit(event)}
                                onKeyDown={this.handleKeyDown}
                            />
                        )
                }
            </div>
        );
    }
}

ViewEditToggleField.propTypes = {
    type: React.PropTypes.string,
    text: React.PropTypes.string,
    clearTextOnClick: React.PropTypes.bool,
    resetToOriginalOnSubmit: React.PropTypes.bool,
    isReadOnly: React.PropTypes.bool,
    includeWithSubmit: React.PropTypes.object,

    handleSubmit: React.PropTypes.func.isRequired
};

ViewEditToggleField.getDefaultProps = {
    text: '',
    clearTextOnClick: false,
    resetToOriginalOnSubmit: false,
    isReadOnly: false
};

export default ViewEditToggleField;
