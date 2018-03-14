import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Calls onRestartGame when link is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    wrapper.find('.new').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Calls onGenerateAuralUpdate when link is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    wrapper.find('.status-link').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});
