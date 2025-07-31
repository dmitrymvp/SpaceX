import { describe, it, expect } from 'vitest';
import { renderWithMantine } from '../../../tests/utils';
import { screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('Должен отображаться компонент', () => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);

    renderWithMantine(<Modal />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });
});
