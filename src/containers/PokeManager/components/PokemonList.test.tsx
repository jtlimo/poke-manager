import { shallow } from 'enzyme';
import React from 'react';
import PokemonList from './PokemonList';

describe('PokemonList', () => {
  describe('when startup the application', () => {
    it('renders succesfully', () => {
      expect(shallow(<PokemonList />)).toBeDefined();
    });

    it('renders a grid with all pokemons', () => {
      const wrapper = shallow(<PokemonList />);

      expect(wrapper.find('PokemonItem')).toHaveLength(6);
    });
  });
});
