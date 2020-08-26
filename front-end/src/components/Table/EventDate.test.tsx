import * as React from 'react';
import { shallow } from 'enzyme';
import EventDate from './EventDate';

describe('EventDate', () => {
  it('should render correctly with given timestamp', () => {
    const strings = '1598457735';
    const component = shallow(<EventDate timestamp={strings} />);
    console.log(component);
    expect(component).toMatchSnapshot();
  });
});
