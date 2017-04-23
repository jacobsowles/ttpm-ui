import React from 'react';
import PropTypes from 'prop-types';

import PageSubtitle from 'components/page-subtitle';
import PageTitle from 'components/page-title';

import './page-info.scss';

const PageInfo = props => {
    return (
        <div className="page-info">
            <PageTitle>{props.title}</PageTitle>

            {
                props.subtitle
                    ? <PageSubtitle>{props.subtitle}</PageSubtitle>
                    : null
            }
        </div>
    );
};

PageInfo.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default PageInfo;
