import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders an aural status update', () => {
    const update = 'The state is this!';
    const wrapper = shallow(<AuralStatus auralStatus={update} />);
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual(update);
  });
});
