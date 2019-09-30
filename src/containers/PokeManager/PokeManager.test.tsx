import PokeManager from './PokeManager';
import { mount } from 'enzyme';
import React from 'react';

describe('PokeManager', () => {
    it('does renders correctly', () => {
        expect(mount(<PokeManager />)).toBeDefined();
    });
});