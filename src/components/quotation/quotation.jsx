// npm modules
import React from 'react';

// styles
require('./quotation.scss');

class Quotation extends React.Component {

    render() {
        return (
            <div className="quotation">
                <img src="/assets/images/gray-quotation-marks.png" width="50" />
                <span>
                    <p className="quote">{this.props.quote}</p>
                    <p className="attribution">- {this.props.attribution}</p>
                </span>
                <img src="/assets/images/gray-quotation-marks.png" width="50" />
            </div>
        );
    }
}

Quotation.propTypes = {
    quote: React.PropTypes.string.isRequired,
    attribution: React.PropTypes.string
};

Quotation.getDefaultProps = {
    attribution: 'Unknown'
};

export default Quotation;
