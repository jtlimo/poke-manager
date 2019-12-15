import PokeManager from './PokeManager';
import { shallow } from 'enzyme';
import React from 'react';

describe('PokeManager', () => {
  it('does renders correctly', () => {
    expect(shallow(<PokeManager />)).toBeDefined();
  });
});
