import React from 'react';
import { shallow, } from 'enzyme';
import AddSongForm from '../components/AddSongForm';

describe('AddSongForm', () => {
    const addSong = jest.fn();
    const component = <AddSongForm addSong={addSong} index={0} />

    it('renders without crashing', () => {
        shallow(component);
    });

    it('renders 4 text input elements', () => {
        const wrapper = shallow(component);
        expect(wrapper.find('input[type="text"]').length).toBe(4);
    })

    it('renders a submit button', () => {
        const wrapper = shallow(component);
        const submit = wrapper.find('input[type="submit"]');
        expect(submit.length).toBe(1);
    });

    it('calls the passed in function on submit', () => {
        addSong.mockReset();        
        const wrapper = shallow(component);
        wrapper.find('form').simulate('submit');
        expect(addSong.mock.calls.length).toBe(1);
    });

    it('the addSong function is passed the singer index and song on submit', () => {
        addSong.mockReset();        
        const wrapper = shallow(component);
        wrapper.setState({
            title: "Personal Jesus",
            artist: "Depeche Mode",
            vendor: "SC",
            uri: 'https://www.youtube.com/watch?v=XBQmrAG64WI'
        });
        wrapper.find('form').simulate('submit');
        expect(addSong.mock.calls[0]).toEqual([ 
            0, 
            {
                title: "Personal Jesus",
                artist: "Depeche Mode",
                vendor: "SC",
                uri: 'https://www.youtube.com/watch?v=XBQmrAG64WI'
            }
        ]);
    });
});