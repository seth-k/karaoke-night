import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import {App} from './App';
import AddSinger from './components/AddSinger'
import Singer from './components/Singer';


describe('<App /> container', () => {
  const sampleRotation = [
    { name: "S.S.S", songs: []},
    { name: "Jix", songs: []},
    { name: "Larz", songs: []},
  ];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('welcomes you to Karaoke Night', () => {
    const app = shallow(<App />);
    expect(app.contains(<h2>Welcome to Karaoke Night</h2>)).toBe(true);
  });

  it('renders the singers in the rotation', () => {
    const app = mount(<App singers={sampleRotation} />);
    expect(app.find(Singer).length).toBe(3);
  });
  
  it('renders all required subcomponents', () => {
    console.error = jest.fn(); // suppress prop warnings for containsAllMatchingElements
    const app = shallow(<App />);
    expect(app.containsAllMatchingElements([
      <AddSinger />,
    ])).toBe(true);
  })

  it('shows who is currently singing', () => {
      const app = shallow(<App singers={sampleRotation} />);
      expect(app.find('.now-playing').text()).toBe("Now Singing: S.S.S");
  });
});
