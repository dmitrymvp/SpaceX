import { Card, Image, Text, Stack } from '@mantine/core';
import Button from '../shared/ui/button/Button';

const LaunchCard = ({ missionName, rocketName, image, showLaunchDetails }) => {
  return (
    <Card h={280} w={200} shadow="sm" padding="md" radius="md" withBorder>
      <Stack
        bg="var(--mantine-color-body)"
        align="center"
        justify="space-between"
      >
        <Image src={image} w={100} mt={10} />
        <Text fw={700}>{missionName}</Text>
        <Text c="dimmed">{rocketName}</Text>
        <Button showLaunchDetails={showLaunchDetails}/>
      </Stack>
    </Card>
  );
};

export default LaunchCard;
