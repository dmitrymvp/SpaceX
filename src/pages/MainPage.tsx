import LaunchList from '../widgets/LaunchList';
import { Container, Title } from '@mantine/core';

const MainPage = () => {
  return (
    <Container w={830}>
      <Title m={30} ta="center">
        SpaceX Launcher 2020
      </Title>
      <LaunchList />
    </Container>
  );
};

export default MainPage;
