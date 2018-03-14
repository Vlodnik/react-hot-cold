import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Renders the list of guesses', () => {
    const guessList = [1, 2, 69];
    const wrapper = shallow(<GuessList guesses={guessList} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(3);
    guessList.forEach((guess, index) => {
      expect(items.at(index).text()).toEqual(guess.toString());
    });
  });
});
