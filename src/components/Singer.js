import React, { PropTypes } from 'react';
import SongQueue from './SongQueue'
import '../css/Singer.css';

const Singer = props => (
    <div className="singer">
        <span className="singerName">{props.name}</span>
        <span className="singer-controls">
            <i className="fa fa-music" onClick={() => props.displaySongsFor(props.index)}></i>
        </span>
        { props.showSongs ? <SongQueue singerIndex={props.index} songs={props.songs} addSong={props.addSong} /> : null }
    </div>
);

Singer.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    songs: PropTypes.array,
    showSongs: PropTypes.bool,
    displaySongsFor: PropTypes.func,
    HideSongs: PropTypes.func,
    addSong: PropTypes.func,
};
export default Singer;