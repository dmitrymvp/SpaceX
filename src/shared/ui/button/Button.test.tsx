import { describe, it, expect } from 'vitest';
import { renderWithMantine } from '../../../tests/utils';
import { screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('Должен отображаться компонент', () => {
    renderWithMantine(<Button />);
    expect(screen.getByText('Sea more')).toBeInTheDocument();
  });
});
