import React, { useRef, useState } from "react";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";
import {
  Button,
  SplitButton,
  ChevronButton,
} from "@zendeskgarden/react-buttons";
import {
  Grid,
  Row as GridRow,
  Col as GridCol,
} from "@zendeskgarden/react-grid";
import { LG, MD, Paragraph, SM, XL } from "@zendeskgarden/react-typography";
import {
  Body as TableBody,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
} from "@zendeskgarden/react-tables";
import { Field, Label, Toggle, Input } from "@zendeskgarden/react-forms";
import {
  Dropdown,
  Multiselect,
  Field as DropdownField,
  Menu,
  Item,
  Trigger,
  Label as DropdownLabel,
} from "@zendeskgarden/react-dropdowns";
import {
  Modal,
  Header,
  Body,
  Footer,
  FooterItem,
  Close,
} from "@zendeskgarden/react-modals";
import { Tag } from "@zendeskgarden/react-tags";
import { Datepicker } from "@zendeskgarden/react-datepickers";

import mockData, { groups } from "../../mockData/mockData";

const theme = {
  ...DEFAULT_THEME,
  colors: {
    ...DEFAULT_THEME.colors,
    primaryHue: "hotpink",
  },
};

const Garden = () => {
  const [visible, setVisible] = React.useState(false);
  const [date, setDate] = useState(new Date());
  const [rotated, setRotated] = useState<boolean>();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GridRow
          justifyContent="between"
          style={{ width: "70vw", marginBottom: "2rem" }}
        >
          <GridCol>
            <XL>Feature flags</XL>
          </GridCol>
          <GridCol textAlign="end">
            <SplitButton style={{ marginRight: "1rem" }}>
              <Button>Harvest</Button>
              <Dropdown
                onStateChange={(options) =>
                  Object.prototype.hasOwnProperty.call(options, "isOpen") &&
                  setRotated(options.isOpen)
                }
              >
                <Trigger>
                  <ChevronButton
                    aria-label="other actions"
                    isRotated={rotated}
                  />
                </Trigger>
                <Menu placement="bottom-end">
                  <Item value="prune">Prune</Item>
                  <Item value="water">Water</Item>
                  <Item value="fertilize">Fertilize</Item>
                </Menu>
              </Dropdown>
            </SplitButton>
            <Button isPrimary onClick={() => setVisible(true)}>
              Add new
            </Button>
          </GridCol>
        </GridRow>

        <GridRow justifyContent="around" style={{ width: "70vw" }}>
          <Table style={{ minWidth: 500 }}>
            <TableBody>
              {mockData.map((n) => (
                <Row>
                  <Cell>
                    <LG>{n.title}</LG>
                    <SM>{n.description}</SM>
                  </Cell>
                  <Cell isMinimum>
                    <Field>
                      <Toggle defaultChecked={n.checked}>
                        <Label></Label>
                      </Toggle>
                    </Field>
                  </Cell>
                </Row>
              ))}
            </TableBody>
          </Table>
        </GridRow>

        {visible && (
          <Modal onClose={() => setVisible(false)}>
            <Header>Add new feature flag</Header>
            <Body>
              <Field>
                <Label>Name</Label> <Input />
              </Field>
              <Dropdown>
                <DropdownField>
                  <DropdownLabel>Group</DropdownLabel>
                  <Multiselect
                    renderItem={({ value, removeValue }: any) => (
                      <Tag>
                        <span>{value}</span>
                        <Tag.Close />
                      </Tag>
                    )}
                  />
                </DropdownField>
                <Menu>
                  {groups.map((option) => (
                    <Item key={option.value} value={option.value}>
                      <span>{option.label}</span>
                    </Item>
                  ))}
                </Menu>
              </Dropdown>
              <Field>
                <Label>Activation date</Label>
                <Datepicker value={date} onChange={setDate}>
                  <Input />
                </Datepicker>
              </Field>
            </Body>
            <Footer>
              <FooterItem>
                <Button onClick={() => setVisible(false)} isBasic>
                  Cancel
                </Button>
              </FooterItem>
              <FooterItem>
                <Button isPrimary onClick={() => setVisible(false)}>
                  Save
                </Button>
              </FooterItem>
            </Footer>
            <Close aria-label="Close modal" />
          </Modal>
        )}
      </>
    </ThemeProvider>
  );
};

export default Garden;
