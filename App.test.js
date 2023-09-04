// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chat room title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Chat Room/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders initial message input placeholder', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Type your message.../i);
  expect(inputElement).toBeInTheDocument();
});
