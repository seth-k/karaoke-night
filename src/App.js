import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SingerActionCreators from './actions/singer';
import './css/App.css';
import AddSinger from './components/AddSinger';
import Singer from './components/Singer';

export class App extends Component {
  render() {
    const { singers, displaySongsIndex, dispatch } = this.props;
    const addSinger = bindActionCreators(SingerActionCreators.addSinger, dispatch);
    const nextSinger = bindActionCreators(SingerActionCreators.nextSinger, dispatch);
    const addSong = bindActionCreators(SingerActionCreators.addSong, dispatch);
    const displaySongsFor = bindActionCreators(SingerActionCreators.displaySongsFor, dispatch);
    const hideSongs = bindActionCreators(SingerActionCreators.hideSongs, dispatch);

    let currentSinger;
    if(singers[0]) {
      currentSinger = ( <span>
          {singers[0].name} 
          {singers[0].songs[0] && singers[0].songs[0].uri ? <a href={singers[0].songs[0].uri} target="karaoke_video"><i className="fa fa-play"></i></a> : null }
          <i className="fa fa-step-forward" onClick={nextSinger}></i>
        </span>);
    } else {
      currentSinger = (<span>Don't be shy!</span>);
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Karaoke Night</h2>
          <div className="now-playing">
            Now Singing: {currentSinger}
          </div>
        </div>

        <AddSinger addSinger={addSinger} />
        <div className="singerQueue">
          { singers.map((singer, index) => (
            <Singer name={singer.name}
                index={index}
                key={singer.name}
                songs={singer.songs}
                showSongs={index === displaySongsIndex}
                displaySongsFor={displaySongsFor}
                hideSongs={hideSongs}
                addSong={addSong} />
          )) }
        </div>
      </div>
    );
  }

  static propTypes = {
    singers: PropTypes.array,
    displaySongsIndex: PropTypes.number,
  };

  static defaultProps = {
    singers: [],
    displaySongsIndex: -1,
  }
}

const mapStateToProps = state => (
  {
    singers: state.singers,
    displaySongsIndex: state.displaySongQueue
  }
);

export default connect(mapStateToProps)(App);
