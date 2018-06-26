import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StarWarsProfileContainer from '../../containers/StarWarsProfileContainer';

configure({ adapter: new Adapter() });

test('should render StarWarsProfileContainer component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<StarWarsProfileContainer />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});