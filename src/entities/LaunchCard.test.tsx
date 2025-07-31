import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderWithMantine } from '../tests/utils';
import { screen } from '@testing-library/react';
import LaunchCard from './LauchCard';
import userEvent from '@testing-library/user-event';

describe('LaunchCard', () => {
  const showLaunchDetails = vi.fn();

  beforeEach(() => {
    renderWithMantine(
      <LaunchCard
        missionName="Starlink"
        rocketName="Falcon"
        showLaunchDetails={showLaunchDetails}
      />,
    );
  });

  it('Должен отображаться компонент', () => {
    expect(screen.getByAltText('missionImage')).toBeInTheDocument();
    expect(screen.getByText('Starlink')).toBeInTheDocument();
    expect(screen.getByText('Falcon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('При нажатии на кнопку должна сробатывать функция', async () => {
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(showLaunchDetails).toHaveBeenCalled();
  });
});
