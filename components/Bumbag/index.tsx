import React from "react";
import {
  Provider,
  Heading,
  Switch,
  Button,
  DropdownMenu,
  Modal,
  Dialog,
  useToasts,
  ToastManager,
  RadioGroupField,
  SelectMenu,
  SelectMenuField,
  Set,
  Flex,
  Box,
  Text,
  Container,
  Table,
  Paragraph,
  Card,
  InputField,
} from "bumbag";

import mockData from "../../mockData/mockData";

const Bumbag = () => {
  const [value, setValue] = React.useState();
  const toasts = useToasts();

  const handleAddToast = () => {
    console.log("click");
    toasts.add({
      title: "Did you know?",
      message: "Bumbag is a UI Kit for React",
    });
  };

  return (
    <Provider>
      <Modal.State animated={true}>
        <Container style={{ width: "70vw" }}>
          <Flex paddingY="major-4">
            <Box style={{ flexShrink: 1, flexGrow: 1 }}>
              <Heading>Feature flags</Heading>
            </Box>
            <Box style={{ flexShrink: 1 }} alignX="right">
              <Set>
                <DropdownMenu
                  menu={
                    <>
                      <DropdownMenu.Item iconBefore="solid-pen">
                        Edit
                      </DropdownMenu.Item>
                      <DropdownMenu.Item iconBefore="solid-share">
                        Share
                      </DropdownMenu.Item>
                      <DropdownMenu.Item iconBefore="solid-file-signature">
                        Rename
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        iconBefore="solid-trash-alt"
                        color="danger"
                      >
                        Delete
                      </DropdownMenu.Item>
                    </>
                  }
                >
                  <Button iconAfter="chevron-down">Actions</Button>
                </DropdownMenu>
                <Modal.Disclosure use={Button} palette="primary" alignX="right">
                  Add new
                </Modal.Disclosure>
              </Set>
            </Box>
          </Flex>

          <Table variant="minimal" isHoverable>
            <Table.Body>
              {mockData.map((n) => (
                <Table.Row>
                  <Table.Cell>
                    <Heading use="h6">{n.title}</Heading>
                    <Paragraph>{n.description}</Paragraph>
                  </Table.Cell>
                  <Table.Cell textAlign="right">
                    <Box alignX="right">
                      <Switch defaultChecked={n.checked} />
                    </Box>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>

        <Dialog.Modal
          showActionButtons
          hideOnClickOutside
          hideOnEsc
          baseId="df"
          type="info"
          title="Add new feature flag"
        >
          <InputField
            label="Title"
            placeholder="Enter a short title ..."
            isRequired
            paddingY="major-2"
          />
          <InputField
            label="Description"
            paddingY="major-2"
            placeholder="Enter a longer description (optional)"
          />
          <SelectMenuField
            hasTags
            paddingY="major-2"
            isMultiSelect
            onChange={setValue}
            options={[
              { key: 1, label: "Apples", value: "apples" },
              { key: 2, label: "Bananas", value: "bananas" },
              { key: 3, label: "Oranges", value: "oranges" },
              { key: 4, label: "Mangos", value: "mangos" },
            ]}
            placeholder="Select a group..."
            label="Add to group"
            value={value}
          />
          <RadioGroupField
            label="What's the weather?"
            name="weather5"
            options={[
              { label: "Sunny", value: "sunny" },
              { label: "Windy", value: "windy" },
              { label: "Overcast", value: "overcast" },
            ]}
          />
        </Dialog.Modal>
        <ToastManager />
      </Modal.State>
    </Provider>
  );
};

export default Bumbag;
