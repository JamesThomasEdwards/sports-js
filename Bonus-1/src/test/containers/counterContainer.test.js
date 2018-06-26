import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import CounterContainer from '../../containers/CounterContainer.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

test('should render BoardContainer component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<CounterContainer />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

describe('BoardContainer test', () => {
    describe('<BoardContainer />', () => {
        const wrapper = shallow(<CounterContainer startValue={0} />);
        it('Renders a <div>', () => {
            expect(wrapper.type()).toEqual('div');
        });
    });
});
