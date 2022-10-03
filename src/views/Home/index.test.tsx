import React from 'react';
import { render, screen } from '@testing-library/react';
import CompareSpeed from './index';

test('checking home page', () => {
  render(<CompareSpeed />);
  const linkElement = screen.getByText(/HERE/i);
  expect(linkElement).toBeDefined();
});
