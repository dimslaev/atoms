import { List, ListItem, ListItemProps } from "../../src/components/list";
import { Close } from "../../src/components/close";
import { Icon } from "../../src/components/icon";
import { mdiAlertCircle, mdiTrashCan } from "@mdi/js";
import { Container, getRowTitle } from "../components/story-container";

const button = (
  <Close
    startIcon={<Icon path={mdiTrashCan} size="sm" />}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
  />
);

// const defaultListRows: ListItemProps[][] = [
//   [
//     {
//       children: "This is a normal list item",
//     },
//     {
//       children: "This is a normal list item",
//     },
//     {
//       children: "This is a normal list item",
//     },
//   ],
// ];

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

// export function Default() {
//   return defaultListRows.map((row, index) => (
//     <Container
//       key={index}
//       title={getRowTitle(row)}
//       style={{ maxWidth: 400 }}
//       rowStyle={{ flexDirection: "column", alignItems: "initial" }}
//     >
//       <List>
//         {row.map((col, colIndex) => (
//           <ListItem key={colIndex} {...col} />
//         ))}
//       </List>
//     </Container>
//   ));
// }

export function Default() {
  return groupListRows.map((row, index) => (
    <Container
      key={index}
      title={getRowTitle(row)}
      style={{ maxWidth: 400 }}
      rowStyle={{ flexDirection: "column", alignItems: "initial" }}
    >
      <List group>
        {row.map((col, colIndex) => (
          <ListItem key={colIndex} {...col} />
        ))}
      </List>
    </Container>
  ));
}
