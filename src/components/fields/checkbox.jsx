// npm modules
import React from 'react';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        });

        this.props.handleChange(this.props.includeWithChange);
    }

    render() {
        return (
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={() => this.handleChange()}
            />
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
