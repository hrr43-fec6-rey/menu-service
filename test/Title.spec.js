import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Title from '../src/Title.jsx';

configure({ adapter: new Adapter() });

describe('Test Title component', () => {
  let wrapper = shallow(<Title />);

  it('should not return an error', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
