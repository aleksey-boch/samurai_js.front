import React from "react";
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import SamuraJSApp from "./App";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing',  () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});