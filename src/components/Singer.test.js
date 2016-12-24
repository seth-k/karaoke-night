import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Singer from '../components/Singer';

describe('<Singer /> components', () => {
    const singer = {
        name: "S.S.S",
        songs: [],
    }

    it('renders without crashing', () => {
        shallow(<Singer name={singer.name} />);
    });

    it('renders the singer\'s name', () => {
        const wrapper = shallow(<Singer name={singer.name} />)
        expect(wrapper.find('.singerName').text()).toBe("S.S.S");
    });
});
