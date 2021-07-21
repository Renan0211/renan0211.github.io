/* eslint-disable */
import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Home from '../Pages/Home';

describe('tests the Home page header and navigation', () => {
  it('should render a header with my name on it', () => {
    const { getByTestId } = renderWithRouter(<Home />);
    const mainTitle = getByTestId("name-header");
    expect(mainTitle).toBeInTheDocument();
  });
  it('should have a link to the about page', () => {
    const { getByTestId, history } = renderWithRouter(<Home />);
    const aboutBtn = getByTestId('about-link');
    fireEvent.click(aboutBtn);
    const { pathname } = history.location;
    setTimeout(() => {expect(pathname).toBe('/about')}, 500);
  });
});

describe('tests if the Home page renders the project cards', () => {
  it('should render the project cards', () => {
    const { findAllByTestId } = renderWithRouter(<Home />);
    const cards = findAllByTestId('project-card');
    expect(cards).toBeInTheDocument();
  });
  it('should render the details buttons in all the cards', () => {
    const { findAllByTestId } = renderWithRouter(<Home />);
    const cards = findAllByTestId('project-card');
    expect(cards).toBeInTheDocument();
    const detailBtns = findAllByTestId('details-btn');
    expect(detailBtns).toBeInTheDocument();
    expect(detailBtns.length).toBe(cards.length);
  });
  test('if the details button redirects to the project details', () => {
    const { findAllByTestId, history } = renderWithRouter(<Home />);
    const allDetailBtn = findAllByTestId('details-btn');
    const firstDetailsBtn = allDetailBtn[0];
    fireEvent.click(firstDetailsBtn);
    const { pathname } = history.location;
    expect(pathname).toContain('/project/');
  });
});
