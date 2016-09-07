// npm modules
import React from 'React';

// styles
const styles = {
};

class TextFilter extends React.Component {
    render() {
        return (
            <div className="text-filter form-inline" style={styles}>
                <input type="text" className="form-control" placeholder="Filter" />
            </div>
        );
    }
}

export default TextFilter;
