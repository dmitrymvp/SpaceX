import { Card, Image, Text, Stack, Box } from '@mantine/core';
import Button from '../shared/ui/button/Button';
import type { launchType } from '../widgets/types/launchTypes';

type LaunchCardProps = {
  showLaunchDetails: () => void;
} & launchType;

const LaunchCard = ({
  missionName,
  rocketName,
  image,
  showLaunchDetails,
}: LaunchCardProps) => {
  return (
    <Card h={320} w={250} shadow="sm" padding="md" radius="md" withBorder>
      <Stack
        bg="var(--mantine-color-body)"
        align="center"
        justify="space-between"
      >
        <Box h={100} w={100} mt={25}>
          <Image src={image} alt="missionImage" />
        </Box>
        <Text lineClamp={1} fw={700} mt={15}>
          {missionName}
        </Text>
        <Text c="dimmed" mb={10}>
          {rocketName}
        </Text>
        <Button showLaunchDetails={showLaunchDetails} />
      </Stack>
    </Card>
  );
};

export default LaunchCard;
