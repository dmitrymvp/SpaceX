import { describe, it, expect } from 'vitest';
import { renderWithMantine } from '../../tests/utils';
import LaunchList from '../LaunchList';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LaunchList', () => {
  it('Компонент должен отрисовываться', async () => {
    renderWithMantine(<LaunchList />);

    expect(await screen.findByText(/Starlink 2/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Crew Dragon In Flight Abort Test/i),
    ).toBeInTheDocument();
    expect(await screen.findByText(/Starlink 3/i)).toBeInTheDocument();
  });

  it('При нажатии на кнопку должно открываться модальное окно с подробной информацией', async () => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);

    renderWithMantine(<LaunchList />);

    const button = await screen.findAllByRole('button');

    userEvent.click(button[1]);

    expect(await screen.findByText(/Details/i));
    screen.debug();
  });
});
