import {
  extendTheme,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Button,
  ButtonGroup,
  ChakraProvider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useToast,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Box,
  Container,
  Input,
} from "@chakra-ui/react";

import mockData from "../../mockData/mockData";

const theme = extendTheme({
  colors: {
    pink: {
      50: "#f7fafc",
    },
  },
});

const Chakra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="70vw" centerContent>
        <Flex w="100%">
          <Heading flexGrow={1}>Feature flags</Heading>
          <Box>
            <Button onClick={onOpen}>Open Modal</Button>
          </Box>
        </Flex>

        <Table>
          <Tbody>
            {mockData.map((n) => (
              <Tr>
                <Td>
                  <Text fontSize="xl">{n.title}</Text>
                  <Text>{n.description}</Text>
                </Td>
                <Td textAlign="right">
                  <Switch defaultChecked={n.checked} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new feature flag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="title" isRequired mb={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Enter a short title" />
            </FormControl>
            <FormControl id="description" mb={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Enter a longer description (optional)" />
            </FormControl>
            <FormControl id="description" mb={4}>
              <FormLabel>Group</FormLabel>
              <Select placeholder="Select group (optional)">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default Chakra;
