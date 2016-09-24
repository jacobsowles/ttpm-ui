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
            value: this.props.clearTextOnClick ? '' : this.state.value
        });
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                event.target.value = '';
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

            this.setState({
                value: this.props.text
            });
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
    handleSubmit: React.PropTypes.func.isRequired,
    includeWithSubmit: React.PropTypes.object,
    isReadOnly: React.PropTypes.bool
};

ViewEditToggleField.getDefaultProps = {
    text: '',
    clearTextOnClick: false,
    isReadOnly: false
};

export default ViewEditToggleField;
