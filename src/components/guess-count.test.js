import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Renders the number of guesses', () => {
    const wrapper = shallow(<GuessCount guessCount={15} />);
    expect(wrapper.text()).toEqual('You\'ve made 15 guesses!');
  });
});
