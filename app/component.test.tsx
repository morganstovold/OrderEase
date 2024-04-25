import { render, screen } from '@testing-library/react';

import Component from './component'; // adjust the import path as needed

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);

    expect(screen.getByText('component')).toBeInTheDocument();
  });
});
