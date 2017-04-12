import React, { Component, PropTypes } from 'react';
import './page-navigation.scss';

class PageNavigation extends Component {
    render() {
        return (
            <ul className="page-navigation">
                {
                    this.props.children.map((listItem, index) => {
                        return (
                            <li key={index}>{listItem}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

PageNavigation.propTypes = {
};

export default PageNavigation;
