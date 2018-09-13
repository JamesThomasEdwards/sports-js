import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Button from '../../components/Button.jsx';
import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import BoardContainer from '../../containers/CounterContainer.jsx'

Enzyme.configure({ adapter: new Adapter() });
const mockDecrease = jest.fn()
const decrProps = { id: 0, key: 'button' + 0, handeler: mockDecrease, buttonTitles: 'SUBTRACT (+)' }
const decreaseButton = shallow(<Button />)
const app = shallow(<BoardContainer />)
// test('should render Button component correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Button />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });
// it('to render correctly', () => {
//     expect(decreaseButton).toMatchSnapshot()
// })
// beforeEach(() => {
//     decreaseButton.find('.button-container').childAt(0).simulate('click')
// })
// it('to decrease score', () => {

//     expect(app.state()).toEqual({ score: 1 })
// })
