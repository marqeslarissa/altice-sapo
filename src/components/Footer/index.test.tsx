import React from 'react';
import { render, screen } from '@testing-library/react';
import CompareSpeed from './index';

test('checking instagram footer', () => {
  render(<CompareSpeed />);
  const linkElement = screen.getAllByAltText(/Logotipo do Instagram/i);
  expect(linkElement).toBeDefined();
});

test('checking facebook footer', () => {
  render(<CompareSpeed />);
  const linkElement = screen.getAllByAltText(/Logotipo do Facebook/i);
  expect(linkElement).toBeDefined();
});

test('checking twitter footer', () => {
  render(<CompareSpeed />);
  const linkElement = screen.getAllByAltText(/Logotipo do Twitter/i);
  expect(linkElement).toBeDefined();
});
