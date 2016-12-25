import React, { PropTypes } from 'react';
import AddSongForm from '../components/AddSongForm'
import '../css/SongQueue.css';

const SongQueue = props => {
    return (
        <div className="song-queue">
            {props.songs.map((song, songIndex) => {
                return (
                    <div className="song-listing" key={song.uri}>
                        {song.title} - {song.artist}
                    </div>
                );
            })}
            <AddSongForm index={props.singerIndex} addSong={props.addSong} />
        </div>  
    );
}

SongQueue.propTypes = {
    songs: PropTypes.array.isRequired,
    singerIndex: PropTypes.number.isRequired,
    addSong: PropTypes.func.isRequired,
}

export default SongQueue;