import * as React from 'react';
import { shallow } from 'enzyme';
import Table from './Container';

describe('Table container', () => {
  it('should render the container correctly', () => {
    const component = shallow(<Table />);

    expect(component).toMatchSnapshot();
  });
});
