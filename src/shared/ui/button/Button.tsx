import { Button as Btn } from '@mantine/core';

type ButtonProps = {
  showLaunchDetails: () => void;
};

const Button = ({ showLaunchDetails }: ButtonProps) => {
  return (
    <Btn variant="filled" radius="md" w="100%" onClick={showLaunchDetails}>
      Sea more
    </Btn>
  );
};

export default Button;
