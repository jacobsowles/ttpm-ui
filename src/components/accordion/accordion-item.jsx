import React, { Component, PropTypes } from 'react';
import DownAngleIcon from '~/icons/down-angle-icon';
import RightAngleIcon from '~/icons/right-angle-icon';

require('./accordion-item.scss');

// styles - controlled by state, to be refactored into className +/-
const styles = {
    active: {
        display: 'inherit'
    },
    inactive: {
        display: 'none'
    }
};

class AccordionItem extends Component {

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
        const handleClick = !this.props.activateOnHeaderClick ? this.handleClick : null;

        return (
            <div className={`accordion-item ${this.state.active ? 'accordion-item-active' : ''}`}>
                <div className="accordion-header" onClick={this.props.activateOnHeaderClick ? this.handleClick : null}>
                    {
                        !this.props.showIcon
                            ? null
                            : (
                                this.state.active
                                    ? <DownAngleIcon className="toggle" handleClick={this.handleClick} />
                                    : <RightAngleIcon className="toggle" handleClick={this.handleClick} />
                            )
                    }

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
    header: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired,
    activateOnHeaderClick: PropTypes.bool,
    showIcon: PropTypes.bool
};

AccordionItem.defaultProps = {
    activateOnHeaderClick: false,
    showIcon: true
};

export default AccordionItem;
