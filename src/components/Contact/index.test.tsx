import React from 'react';
import { render, screen } from '@testing-library/react';
import CompareSpeed from './index';

test('checking contact component', () => {
  render(<CompareSpeed />);
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeDefined();
});
