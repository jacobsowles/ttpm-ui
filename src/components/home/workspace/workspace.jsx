import React from 'React';
import ActionIcon from '~/icons/action-icon';
import UserControls from './user-controls';
import ViewContainer from './view-container';

class Workspace extends React.Component {
    render() {
        return (
            <main>
                <header>
                    <div>
                        <ActionIcon
                            id="sidebar-trigger"
                            glyph="bars"
                            handleClick={() => {}}
                        />
                    </div>

                    <div>
                        <UserControls />
                    </div>
                </header>

                <div>
                    <ViewContainer />
                </div>
            </main>
        );
    }
}

export default Workspace;
