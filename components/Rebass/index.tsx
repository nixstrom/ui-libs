import { Button, Heading } from "rebass";

const Rebass = () => {
  return (
    <>
      <Heading fontSize={[5, 6, 7]} color="primary">
        Hello
      </Heading>

      <Button>Primary</Button>
      <Button variant="outline">Primary</Button>
    </>
  );
};

export default Rebass;
