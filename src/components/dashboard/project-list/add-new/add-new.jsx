// npm modules
import React from 'react';

const styles = {
    show: {
        display: 'inherit'
    },
    hide: {
        display: 'none'
    }
};

class AddNew extends React.Component {

    constructor() {
        super();

        this.state = {
            active: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        document.getElementById('input-' + this.props.id).focus();
    }

    handleClick() {
        this.setState({
            active: true
        });
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'Escape': {
                event.target.value = '';
                this.handleSubmit(event.target);
                break;
            }

            case 'Enter': {
                this.handleSubmit(event.target);
                break;
            }
        }
    }

    handleSubmit(element) {
        const value = element.value;
        element.value = '';

        this.setState({
            active: false
        });

        if (value != '') {
            this.props.handleSubmit(value);
        }
    }

    render() {
        return (
            <div className="add-new">
                <section style={this.state.active ? styles.show : styles.hide}>
                    <input
                        id={`input-${this.props.id}`}
                        onBlur={(event) => this.handleSubmit(event.target)}
                        onKeyDown={this.handleKeyDown}
                    />
                </section>
                <section style={this.state.active ? styles.hide : styles.show}>
                    <a className={this.props.class} onClick={this.handleClick}>
                        + Add a new {this.props.entity}
                    </a>
                </section>
            </div>
        );
    }
}

AddNew.propTypes = {
    entity: React.PropTypes.string.isRequired,
    class: React.PropTypes.string,
    handleSubmit: React.PropTypes.func.isRequired
};

AddNew.defaultProps = {
    id: Math.floor((Math.random() * 1000000) + 1)
};

export default AddNew;
