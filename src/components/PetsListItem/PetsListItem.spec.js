import React from 'react';
import ReactDOM from 'react-dom';
import PetsListItem from './';

it('renders without crashing (smoke test)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PetsListItem />, div);
});