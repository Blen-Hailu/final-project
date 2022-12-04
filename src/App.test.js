import { render, screen } from '@testing-library/react';
import App from './App';
import{BrowseRouter as Router}from 'react-router-dom';

test('renders learn react link', () => {
  render(
  <Router> 
    <App />
  </Router>,
    );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
