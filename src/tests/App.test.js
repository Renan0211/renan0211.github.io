/* eslint-disable */
import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

it('should have a link to the about page', () => {
  const { getByTestId, history } = renderWithRouter(<App />);
  const aboutBtn = getByTestId('about-link');
  fireEvent.click(aboutBtn);
  const { pathname } = history.location;
  setTimeout(() => {expect(pathname).toBe('/about')}, 500);
});