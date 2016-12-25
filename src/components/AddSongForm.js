import React, { Component, PropTypes } from 'react';
import '../css/AddSongForm.css';

export default class AddSongForm extends Component {
    static propTypes = {
        addSong: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    };

    state = { 
         title: '',
         artist: '',
         vendor: '',
         uri: '',
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState({ title });
    };

    onArtistChange = (e) => {
        const artist = e.target.value;
        this.setState({ artist });
    };

    onVendorChange= (e) => {
        const vendor = e.target.value;
        this.setState({ vendor });
    };

    onUriChange = (e) => {
        const uri = e.target.value;
        this.setState({ uri });
    };

    addSong = (e) => {
        if (e) e.preventDefault();
        this.props.addSong(this.props.index, {
            title: this.state.title,
            artist: this.state.artist,
            vendor: this.state.vendor,
            uri: this.state.uri
        });
        this.setState({ 
            title: '',
            artist: '',
            vendor: '',
            uri: ''
        });
    };

    youTubeSearchUrl = () => {
        return "https://www.youtube.com/results?search_query=karaoke" +
            encodeURIComponent(" " + this.state.title + " " + this.state.artist);

    }

    render() {
        const searchUrl = this.youTubeSearchUrl();

        return (
            <div className="add-singer-form">
                <form onSubmit={this.addSong}>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        placeholder="Song title"
                        />
                    <input
                        type="text"
                        value={this.state.artist}
                        onChange={this.onArtistChange}
                        placeholder="Song's artist"
                        />
                    <input
                        type="text"
                        value={this.state.vendor}
                        onChange={this.onVendorChange}
                        placeholder="Karaoke vendor"
                        /> 
                    <input
                        type="text"
                        value={this.state.uri}
                        onChange={this.onUriChange}
                        placeholder="Song link or location"
                        />
                    <a href={searchUrl} target="_blank">
                        <i className="fa fa-search"></i>
                    </a>
                    <input type="submit" value="Add Song to Queue" />
                </form>
            </div>
        );
    }
}