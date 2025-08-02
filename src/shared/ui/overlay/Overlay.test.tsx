import { describe, it, expect, vi } from 'vitest';
import { renderWithMantine } from '../../../tests/utils';
import { screen } from '@testing-library/react';
import Overlay from './Overlay';

describe('Overlay', () => {
  const onClose = vi.fn();

  it('Должен отображаться компонент', () => {
    renderWithMantine(<Overlay onClose={onClose} />);
    expect(screen.getByRole('overlay')).toBeInTheDocument();
  });
});
