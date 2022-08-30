import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn devops link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn devops/i);
  expect(linkElement).toBeInTheDocument();

});

test('has login button',()=>{
  render(<App />);
  let button = screen.getByRole("button");
  expect(button).toHaveTextContent("Login");
});
