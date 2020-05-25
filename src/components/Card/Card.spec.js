import React from 'react';
import ReactDOM from 'react-dom';
import Card from './';

it('renders without crashing (smoke test)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});