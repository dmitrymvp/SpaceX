import { describe, it, expect } from 'vitest';
import { renderWithMantine } from '../../../tests/utils';
import { screen } from '@testing-library/react';
import Overlay from './Overlay';

describe('Overlay', () => {
  it('Должен отображаться компонент', () => {
    renderWithMantine(<Overlay />);
    expect(screen.getByRole('overlay')).toBeInTheDocument();
  });
});
