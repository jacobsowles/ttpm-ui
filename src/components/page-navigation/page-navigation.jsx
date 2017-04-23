import React from 'react';
import './page-navigation.scss';

const PageNavigation = props => {
    return (
        <ul className="page-navigation">
            {
                props.children.map((listItem, index) => {
                    return (
                        <li key={index}>{listItem}</li>
                    );
                })
            }
        </ul>
    );
};

export default PageNavigation;
