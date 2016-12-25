import React from 'react';
import { shallow, mount } from 'enzyme';
import SongQueue from '../components/SongQueue';
import AddSongForm from '../components/AddSongForm'

describe('<SongQueue /> components', () => {
    it('renders without crashing', () => {
        shallow(<SongQueue songs={[]} singerIndex={0} addSong={jest.fn()} />);
    });

    it('renders the songs passed in', () => {
        const wrapper = shallow(<SongQueue songs={[
            {
                title: "Personal Jesus",
                artist: "Depeche Mode",
                vendor: "SC",
                uri: 'https://www.youtube.com/watch?v=XBQmrAG64WI'
            }
        ]} singerIndex={0} addSong={jest.fn()} />);
        expect(wrapper.find('div.song-listing').length).toBe(1);
    });

    it('renders an AddSongForm', () => {
        console.error = jest.fn(); // suppress prop warnings for containsAllMatchingElements
        const app = shallow(<SongQueue songs={[]} singerIndex={0} addSong={jest.fn()} />);
        expect(app.containsAllMatchingElements([
        <AddSongForm />,
    ])).toBe(true);
  })
});