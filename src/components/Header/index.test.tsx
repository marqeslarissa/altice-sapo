import React from 'react';
import { render, screen } from '@testing-library/react';
import CompareSpeed from './index';

test('checking header component', () => {
  render(<CompareSpeed />);
  const linkElement = screen.getByAltText(/Logotipo Sapo 5G/i);
  expect(linkElement).toBeDefined();
});
