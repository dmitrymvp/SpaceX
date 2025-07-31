import { describe, it, expect } from 'vitest';
import { renderWithMantine } from '../../tests/utils';
import LaunchList from '../LaunchList';
import { screen } from '@testing-library/react';

describe('LaunchList', () => {
  it('Компонент должен отрисовываться', async () => {
    renderWithMantine(<LaunchList />);
    const card = await screen.findByText(/falcon/i);
    expect(card).toBeInTheDocument();
    screen.debug();
  });
});
