import React, { Component, PropTypes } from 'react';

import PageSubtitle from 'components/page-subtitle';
import PageTitle from 'components/page-title';

import './page-info.scss';

class PageInfo extends Component {
    render() {
        return (
            <div className="page-info">
                <PageTitle>{this.props.title}</PageTitle>

                {
                    this.props.subtitle
                        ? <PageSubtitle>{this.props.subtitle}</PageSubtitle>
                        : null
                }

            </div>
        );
    }
}

PageInfo.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default PageInfo;
