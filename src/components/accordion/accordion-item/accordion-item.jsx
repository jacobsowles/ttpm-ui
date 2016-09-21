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

    constructor(props) {
        super(props);

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
        return (
            <div className={`accordion-item ${this.state.active ? 'accordion-item-active' : ''}`}>
                <div className="accordion-header">
                    <i
                        className={`accordion-toggle fa fa-angle-${this.state.active ? 'down' : 'right'}`}
                        onClick={this.handleClick}
                    />

                    <span className="accordion-header-content">
                        {this.props.header}
                    </span>
                </div>

                <div
                    className="accordion-body-content"
                    style={this.state.active ? styles.active : styles.inactive}
                >
                    {this.props.body}
                </div>
            </div>
        );
    }
}

AccordionItem.propTypes = {
    header: React.PropTypes.object.isRequired,
    body: React.PropTypes.object.isRequired
};

export default AccordionItem;
