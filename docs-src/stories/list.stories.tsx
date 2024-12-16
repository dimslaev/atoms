import { List, ListItem, ListItemProps } from "../../src/components/list";
import { Icon } from "../../src/components/icon";
import { mdiAlertCircle, mdiTrashCan } from "@mdi/js";
import { Container, getRowTitle } from "../components/story-container";
import { Button } from "../../src/main";

const button = (
  <Button
    color="inherit"
    size="sm"
    startIcon={<Icon path={mdiTrashCan} size="sm" />}
    iconOnly
    onClick={(e) => e.preventDefault()}
  />
);

const defaultListRows: ListItemProps[][] = [
  [
    {
      children: "This is a normal list item",
    },
    {
      children: "This is a normal list item",
    },
    {
      children: "This is a normal list item",
    },
  ],
];

const groupListRows: ListItemProps[][] = [
  [
    {
      children: "This is a group list item",
      group: true,
    },
    {
      children: "This is a group list item",
      group: true,
    },
    {
      children: "This is a group list item",
      group: true,
    },
  ],
  [
    {
      children: "This is a group list item",
      startIcon: <Icon path={mdiAlertCircle} size="sm" />,
      endIcon: button,
      group: true,
    },
    {
      children: "This is a group list item",
      startIcon: <Icon path={mdiAlertCircle} size="sm" />,
      endIcon: button,
      group: true,
    },
    {
      children: "This is a group list item",
      startIcon: <Icon path={mdiAlertCircle} size="sm" />,
      endIcon: button,
      group: true,
    },
  ],
  [
    {
      children: "This is a group list item",
      startIcon: <Icon path={mdiAlertCircle} size="sm" />,
      endIcon: button,
      group: true,
      as: "a",
      href: "/link",
      onClick: (e) => e.preventDefault(),
    },
    {
      children: "This is a group list item",
      startIcon: <Icon path={mdiAlertCircle} size="sm" />,
      endIcon: button,
      group: true,
      as: "a",
      href: "/link",
      onClick: (e) => e.preventDefault(),
    },
    {
      children: "This is a group list item",
      startIcon: <Icon path={mdiAlertCircle} size="sm" />,
      endIcon: button,
      group: true,
      selected: true,
      as: "a",
      href: "/link",
      onClick: (e) => e.preventDefault(),
    },
  ],
];

export function Default() {
  return defaultListRows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      <List>
        {row.map((col, colIndex) => (
          <ListItem key={colIndex} {...col} style={{ width: 300 }} />
        ))}
      </List>
    </Container>
  ));
}

export function Group() {
  return groupListRows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      <List group>
        {row.map((col, colIndex) => (
          <ListItem key={colIndex} {...col} style={{ width: 300 }} />
        ))}
      </List>
    </Container>
  ));
}