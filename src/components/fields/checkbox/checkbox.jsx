import React from 'react';
require('./checkbox.scss');

class Checkbox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.checked = nextProps.checked;
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        });

        this.props.handleChange(this.props.includeWithChange);
    }

    render() {
        return (
            <span>
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={this.state.checked}
                    onChange={() => this.handleChange()}
                />
                <label htmlFor="checkbox" />
            </span>
        );
    }
}

Checkbox.propTypes = {
    checked: React.PropTypes.bool,
    includeWithChange: React.PropTypes.object,
    handleChange: React.PropTypes.func.isRequired
};

Checkbox.getDefaultProps = {
    checked: false
};

export default Checkbox;
