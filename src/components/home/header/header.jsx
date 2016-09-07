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
                <div className="row">
                    <div className="col-xs-2 no-horizontal-padding">
                        <a href="/" id="logo" title="Home">
                            <img src="/assets/images/tt-logo.png" alt="Logo" height="50" />
                            <span id="logo-text">PROJECT MANAGER</span>
                        </a>
                    </div>

                    <div className="col-xs-10" style={{paddingRight: '0'}}>
                        <TextFilter />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
