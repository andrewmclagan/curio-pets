import React from 'react';
import ReactDOM from 'react-dom';
import PetsList from './';

it('renders without crashing (smoke test)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PetsList />, div);
});