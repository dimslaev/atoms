import { Avatar, AvatarProps } from "../../src/components/avatar";
import { Icon } from "../../src/components/icon";
import { mdiAccount } from "@mdi/js";
import { Container, getRowTitle } from "../components/story-container";

const defaultRows: AvatarProps[][] = [
  [
    {
      size: "sm",
      icon: <Icon path={mdiAccount} size="sm" />,
    },
    {
      size: "md",
      icon: <Icon path={mdiAccount} size="md" />,
    },
    {
      size: "lg",
      icon: <Icon path={mdiAccount} size="lg" />,
    },
  ],
  [
    {
      size: "sm",
      initials: "JD",
    },
    {
      size: "md",
      initials: "JD",
    },
    {
      size: "lg",
      initials: "JD",
    },
  ],
  [
    {
      size: "sm",
      src: "/lake.jpeg",
      alt: "User avatar",
    },
    {
      size: "md",
      src: "/lake.jpeg",
      alt: "User avatar",
    },
    {
      size: "lg",
      src: "/lake.jpeg",
      alt: "User avatar",
    },
  ],
];

const rows: AvatarProps[][] = [
  ...defaultRows,
  ...defaultRows.map((row) => row.map((col) => ({ ...col, square: true }))),
];

export function Default() {
  return rows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Avatar key={colIndex} {...col} />
      ))}
    </Container>
  ));
}
