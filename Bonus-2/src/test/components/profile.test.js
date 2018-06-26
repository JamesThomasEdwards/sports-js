import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../../components/Profile';

configure({ adapter: new Adapter() });

test('should render Profile component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Profile />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});