import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import BoardContainer from '../../containers/CounterContainer.jsx';
import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });
const props = 0
const wrapper = shallow(<BoardContainer {...props} />)

it('initial state', () => {
    expect(wrapper.state()).toEqual({ score: 0 })
})

it('creates counter component', () => {
    expect(wrapper.find('Counter').exists()).toBe(true)
})

// it('increrases state', () => {
//     wrapper.find('Button').find('[id=1]').simulate('click')
//     expect(wrapper.state()).toEqual({ score: 1 })
// })
it('renders 3 Button components', () => {
    expect(wrapper.find('Button').length).toEqual(3)
})

// test('should render BoardContainer component correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<CounterContainer />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

// describe('BoardContainer test', () => {
//     describe('<BoardContainer />', () => {
//         const wrapper = shallow(<CounterContainer startValue={0} />);
//         it('Renders a <div>', () => {
//             expect(wrapper.type()).toEqual('div');
//         });
//     });
// });
