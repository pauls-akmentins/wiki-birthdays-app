import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';
import { ButtonVariant } from './types';

// mocks
const clickMock = jest.fn();

// tests
describe('Button component', () => {
  it('triggers onClick', () => {
    render(Button({ children: 'Fetch data', onClick: clickMock }));

    expect(clickMock).not.toHaveBeenCalled();

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(clickMock).toHaveBeenCalledTimes(1);
  });

  it('has inline button styles applied', () => {
    render(Button({ children: 'Fetch data', onClick: clickMock, variant: ButtonVariant.Inline }));

    const button = screen.getByRole('button');

    const buttonClassnames = button.className;

    expect(buttonClassnames).toContain('button__inline');
  });

  it('has regular button styles applied', () => {
    render(Button({ children: 'Fetch data', onClick: clickMock }));

    const button = screen.getByRole('button');

    const buttonClassnames = button.className;

    expect(buttonClassnames).not.toContain('button__inline');
  });
});
