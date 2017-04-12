import React, { Component, PropTypes } from 'react';
import './page-subtitle.scss';

class PageSubtitle extends Component {
    render() {
        return (
            <p className="page-subtitle">
                {this.props.children}
            </p>
        );
    }
}

PageSubtitle.propTypes = {
};

export default PageSubtitle;
