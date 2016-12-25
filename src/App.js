import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SingerActionCreators from './actions/singer';
import './css/App.css';
import AddSinger from './components/AddSinger';
import Singer from './components/Singer';

export class App extends Component {
  render() {
    const { singers, dispatch } = this.props;
    const addSinger = bindActionCreators(SingerActionCreators.addSinger, dispatch);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Karaoke Night</h2>
          <div className="now-playing">
            Now Singing: {singers[0] ? singers[0].name : "Don't be shy!"}
            <i className="fa fa-step-forward"></i>
          </div>
        </div>

        <AddSinger addSinger={addSinger} />
        <div className="singerQueue">
          { singers.map((singer, index) => (
            <Singer name={singer.name}
                index={index}
                key={singer.name}
                songs={singer.songs} />
          )) }
        </div>
      </div>
    );
  }

  static propTypes = {
    singers: PropTypes.array,
  };

  static defaultProps = {
    singers: [],
  }
}

const mapStateToProps = state => (
  {
    singers: state.singers,
  }
);

export default connect(mapStateToProps)(App);
