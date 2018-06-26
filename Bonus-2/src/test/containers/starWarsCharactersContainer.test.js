import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StarWarsCharactersContainer from '../../containers/StarWarsCharactersContainer';

configure({ adapter: new Adapter() });

test('should render StarWarsProfileContainer component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<StarWarsCharactersContainer />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});