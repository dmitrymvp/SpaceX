import { Box, Image, Text } from '@mantine/core';

import Modal from '../shared/ui/modal/Modal';
import type { launchType } from '../widgets/types/launchTypes';

type LaunchDetailsProps = {
  onClose: () => void;
} & launchType;

const LaunchDetails = ({
  onClose,
  image,
  missionName,
  rocketName,
  details,
}: LaunchDetailsProps) => {
  return (
    <Modal onClose={onClose}>
      <Text fw={600}>{missionName}</Text>
      <Box h={200} w={200} mt={30} ml="auto" mr="auto">
        <Image src={image}></Image>
      </Box>

      <Text fw={700} mt={20}>
        Mission name:
      </Text>
      <Text>{missionName}</Text>

      <Text fw={700} mt={20}>
        Rocket name:
      </Text>
      <Text>{rocketName}</Text>

      <Text fw={700} mt={20}>
        Details
      </Text>
      <Text>{details}</Text>
    </Modal>
  );
};

export default LaunchDetails;
