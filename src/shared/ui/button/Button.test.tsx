import { describe, it, expect, vi } from 'vitest';
import { renderWithMantine } from '../../../tests/utils';
import { screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const showLaunchDetails = vi.fn();
  it('Должен отображаться компонент', () => {
    renderWithMantine(<Button showLaunchDetails={showLaunchDetails} />);
    expect(screen.getByText('Sea more')).toBeInTheDocument();
  });
});
