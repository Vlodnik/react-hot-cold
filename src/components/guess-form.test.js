import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Calls onSubmit when the form button is submitted', () => {
    const spy = jest.spyOn(GuessForm.prototype, 'onSubmit');
    const wrapper = mount(<GuessForm />);
    wrapper.simulate('submit');
    expect(spy).toHaveBeenCalled();
  });

  it('Calls onMakeGuess with input value', () => {
    const spy = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={spy} />);
    const input = wrapper.find('#userGuess').instance();
    input.value = '15';
    wrapper.simulate('submit');
    expect(spy).toHaveBeenCalledWith('15');
  });
});
