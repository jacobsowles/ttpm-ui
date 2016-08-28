// npm modules
import React from 'react';

const styles = {
    active: {
        display: 'inherit'
    },
    inactive: {
        display: 'none'
    }
};

class AccordionItem extends React.Component {

    constructor() {
        super();

        this.state = {
            active: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const stateStyle = this.state.active ? styles.active : styles.inactive;
        return (
            <section>
                <a onClick={this.handleClick}>
                    {this.props.header}
                </a>
                <p style={stateStyle}>
                    {this.props.body}
                </p>
            </section>
        );
    }
}

AccordionItem.propTypes = {
    header: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
};

export default AccordionItem;
