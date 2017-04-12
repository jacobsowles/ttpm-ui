import React, { Component, PropTypes } from 'react';
import './page-title.scss';

class PageTitle extends Component {
    render() {
        return (
            <h1 className="page-title">
                {this.props.children}
            </h1>
        );
    }
}

PageTitle.propTypes = {
};

export default PageTitle;
