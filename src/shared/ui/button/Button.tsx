import { Button as Btn } from '@mantine/core';

const Button = ({showLaunchDetails}) => {
  return (
    <Btn variant="filled" radius="md" w="100%" onClick={()=>showLaunchDetails()}>
      Sea more
    </Btn>
  );
};

export default Button;
