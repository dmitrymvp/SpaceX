import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('Button component render', () => {
    render(<Button />);
    screen.debug();
  });
});
