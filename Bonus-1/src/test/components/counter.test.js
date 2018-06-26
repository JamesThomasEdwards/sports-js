import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Counter from '../../components/Counter.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render Counter component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Counter />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});