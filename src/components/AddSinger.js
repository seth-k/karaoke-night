import React, { Component, PropTypes } from 'react';
import '../css/AddSinger.css';

export default class AddSinger extends Component {
    static propTypes = {
        addSinger: PropTypes.func.isRequired,
    };

    state = { name: '' };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({ name });
    };

    addSinger = (e) => {
        if (e) e.preventDefault();
        this.props.addSinger(this.state.name);
        this.setState({ name: '' });
    };

    render() {
        return (
            <div className="add-singer-form">
                <form onSubmit={this.addSinger}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                        placeholder="Singer's name"
                        />
                    <input type="submit" value="Add New Singer" />
                </form>
            </div>
        );
    }
}