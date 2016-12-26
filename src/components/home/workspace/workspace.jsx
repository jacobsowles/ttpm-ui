import React from 'React';
import { Icon, PageSubtitle, PageTitle } from 'react-building-blocks';
import UserControls from './user-controls';
import ViewContainer from './view-container';

class Workspace extends React.Component {
    render() {
        return (
            <main>
                <header>
                    <div>
                        <Icon
                            id="sidebar-trigger"
                            glyph="bars"
                            onClick={() => {}}
                        />
                        <Icon glyph="search" />
                        <input
                            type="text"
                            style={{
                                height: '39px',
                                border: '0'
                            }}
                            placeholder="Search tasks"
                        />
                    </div>

                    <div>
                        <UserControls />
                    </div>
                </header>

                <div>
                    <div style={{
                        borderBottom: '1px solid #E3E3E3',
                        padding: '30px 30px 0 30px'
                    }}>
                        <PageTitle>Group Name</PageTitle>
                        <PageSubtitle>Group description or something goes here</PageSubtitle>

                        <div style={{
                            marginTop: '30px'
                        }}>
                            <ul style={{
                                listStyleType: 'none',
                                textTransform: 'uppercase',
                                fontSize: '9px',
                                letterSpacing: '1px',
                                marginBottom: '15px'
                            }}>
                                <li style={{
                                    display: 'inline-block',
                                    marginRight: '30px'
                                }}>
                                    <a
                                        href="#"
                                        style={{
                                            fontWeight: 'bold',
                                            padding: '10px 0px',
                                            borderBottom: '3px solid #A33B20'
                                        }}
                                    >
                                        List
                                    </a>
                                </li>

                                <li style={{
                                    display: 'inline-block',
                                    marginRight: '30px'
                                }}>
                                    <a
                                        href="#"
                                        style={{
                                            padding: '10px 0',
                                            //borderBottom: '3px solid #48603c',
                                        }}
                                    >
                                        Kanban
                                    </a>
                                </li>

                                <li style={{
                                    display: 'inline-block',
                                    marginRight: '30px'
                                }}>
                                    <a
                                        href="#"
                                        style={{
                                            padding: '10px 0',
                                            //borderBottom: '3px solid #089BF8',
                                        }}
                                    >
                                        Feed
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{
                        background: '#F7F7F7',
                        height: 'calc(100vh - 100px - 40px)',
                        padding: '30px'
                    }}>
                        <ViewContainer />
                    </div>
                </div>
            </main>
        );
    }
}

export default Workspace;
