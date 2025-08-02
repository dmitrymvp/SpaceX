import { describe, it, expect, vi } from 'vitest';
import { renderWithMantine } from '../../../tests/utils';
import { screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  const onClose = vi.fn();

  it('Должен отображаться компонент', () => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);

    renderWithMantine(<Modal onClose={onClose}>Тест</Modal>);
    expect(screen.getByText('+')).toBeInTheDocument();
  });
});
