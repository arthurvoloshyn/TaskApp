import React from 'react';
import { render } from '@testing-library/react';

import Title from '../../components/title/title';

test('renders simple title title', () => {
  const { getByText } = render(<Title />);
  const titleElement = getByText(/simple title/i);
  expect(titleElement).toBeInTheDocument();
});
