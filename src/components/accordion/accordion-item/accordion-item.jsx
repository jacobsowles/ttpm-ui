// npm modules
import React from 'react';

// styles
require('./accordion-item.scss');

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
                <a onClick={this.handleClick} className={this.props.header.class}>
                    {this.props.header.content}
                </a>
                <div style={stateStyle} className={this.props.body.class}>
                    {this.props.body.content}
                </div>
            </section>
        );
    }
}

AccordionItem.propTypes = {
    header: React.PropTypes.object.isRequired,
    body: React.PropTypes.object.isRequired
};

export default AccordionItem;
