// npm modules
import React from 'React';

// components
import LightLogo from '~/logo/light-logo';
import UserControls from '~/home/user-controls/user-controls';

// styles
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <header className="row">
                <div className="limit-full-width">
                    <div className="col-xs-12 col-sm-6">
                        <LightLogo />
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <UserControls />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
