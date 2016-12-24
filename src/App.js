import React, { Component, PropTypes } from 'react';
import './css/App.css';
import AddSinger from './components/AddSinger';
import Singer from './components/Singer';

class App extends Component {
  addSinger = (name) => {
    return 0;
  }

  render() {
    const { singers } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Karaoke Night</h2>
        </div>
        <AddSinger addSinger={this.addSinger} />
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

export default App;
