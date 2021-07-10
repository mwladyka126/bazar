import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBox id='aenean-ru-bristique-222' />);
    expect(component).toBeTruthy();
  });
});
