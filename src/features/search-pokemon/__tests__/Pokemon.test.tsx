import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pokemon from '../pages/Pokemon';

test('renders successfully', () => {
  render(<Pokemon image={'pikachu.jpg'} name={'Pika'} />);
});

test('renders a pokemon with image and name', () => {
  const component = render(<Pokemon image={'pikachu.jpg'} name={'Pikachu'} />);

  expect(component.getAllByTestId('image')).toHaveLength(1);
  expect(component.getByText('Pikachu')).toBeInTheDocument();
});
