// npm modules
import React from 'React';

// styles
const styles = {
    header: {
        background: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        padding: '10px 15px',
        marginBottom: '15px',
        borderRadius: '0',
        float: 'left',
        width: '100%',
        fontSize: '.9em'
    }
};

class Header extends React.Component {
    render() {
        return (
            <div className="header" style={styles.header}>
                {this.props.children}
            </div>
        );
    }
}

export default Header;
