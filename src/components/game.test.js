import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Can restart the game', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().setState({
      guesses: [1, 2, 3, 4, 5],
      feedback: 'Games games games',
      auralStatus: 'Hello friend',
      correctAnswer: 420
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('auralStatus')).toEqual('');
    expect(wrapper.state('correctAnswer')).not.toEqual(420);
  });

  it('Can give feedback about a guess', () => {
    const wrapper = shallow(<Game />);
    const guess = 45;
    wrapper.instance().setState({
      correctAnswer: 50
    });
    wrapper.instance().makeGuess(guess);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
  });

  it('Can create an aural update', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().setState({
      guesses: [1, 2, 69],
      feedback: 'You\'re Hot!'
    });
    wrapper.instance().generateAuralUpdate();
    expect(wrapper.state('auralStatus')).toEqual(
      `Here's the status of the game right now: You're Hot! You've made 3 guesses. In order of most- to least-recent, they are: 69, 2, 1`);
  });
});
