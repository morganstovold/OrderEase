import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Button</Button>);

    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
