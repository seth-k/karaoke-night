import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, } from 'enzyme';
import AddSinger from '../components/AddSinger';

describe('<AddSinger /> component', () => {
    const addSinger = jest.fn();
    const component = <AddSinger addSinger={addSinger} />
    it('renders without crashing', () => {
        shallow(component);
    });

    it('renders a text input element', () => {
        const wrapper = shallow(component);
        expect(wrapper.find('input[type="text"]').length).toBe(1);
    })

    it('renders a submit button', () => {
        const wrapper = shallow(component);
        const submit = wrapper.find('input[type="submit"]');
        expect(submit.length).toBe(1);
    });

    it('calls the passed in function on submit', () => {
        addSinger.mockReset();        
        const wrapper = shallow(component);
        wrapper.find('form').simulate('submit');
        expect(addSinger.mock.calls.length).toBe(1);
    });

    it('the addSinger function is passed the name on submit', () => {
        addSinger.mockReset();        
        const wrapper = shallow(component);
        wrapper.setState({name: "Al"});
        wrapper.find('form').simulate('submit');
        expect(addSinger.mock.calls[0][0]).toBe("Al");
    });
});