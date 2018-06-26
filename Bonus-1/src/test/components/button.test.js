import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Button from '../../components/Button.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render Button component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Button />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});