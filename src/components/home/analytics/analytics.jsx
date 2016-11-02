import React from 'react';
import Icon from '~/icons/icon';
require('./analytics.scss');

class Analytics extends React.Component {

    render() {
        return (
            <div id="analytics">
                <h1>
                    <Icon glyph="area-chart" />
                    Analytics
                </h1>
                <p>Dat data, tho.</p>
            </div>
        );
    }
}

export default Analytics;
