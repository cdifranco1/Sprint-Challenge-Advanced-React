import { render, fireEvent } from '@testing-library/react';
import { SearchForm } from './SearchForm';
import React from 'react';


test("search form renders", () => {
  const { getByLabelText } = render(<SearchForm />)

  getByLabelText(/search by name:/i)
})