import React from 'react';
import { shallow } from 'enzyme';
import Title from '../src/Title.jsx';

describe('Test Title component', () => {
  let wrapper = shallow(<Title />);

  it('should not return an error', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
