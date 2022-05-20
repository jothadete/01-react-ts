import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { sum, nextDay } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test the sum function is 5', () => {
  expect(sum(4,1)).toBe(5)
})

test('MomentJS - add one day to given date and return as Date', () => {
  let date = new Date()
  let date1 = nextDay(date)
  let date2 = new Date(date.setDate(date.getDate() + 1))
  expect(date1).toEqual(date2.toISOString().substring(0,10))
})

