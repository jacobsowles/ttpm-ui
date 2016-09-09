// npm modules
import React from 'React';

// components
import TextFilter from '../../filters/text-filter.jsx';

// styles
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <TextFilter />
            </div>
        );
    }
}

export default Header;
