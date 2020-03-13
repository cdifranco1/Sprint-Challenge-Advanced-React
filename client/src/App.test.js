import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



test('list filters correctly', () => {
  const { getByText, getByLabelText } = render(<App />)

  const searchInput = getByLabelText(/search by name/i)

  fireEvent.change(searchInput, { target: { value: 'Alex'}
  })

})