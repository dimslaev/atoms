import { Alert, AlertProps } from "../../src/components/alert";
import { Icon } from "../../src/components/icon";
import { mdiAlertCircle } from "@mdi/js";
import { Container, getRowTitle } from "../components/story-container";

const defaultRows: AlertProps[][] = [
  [
    {
      color: "primary",
      variant: "solid",
      title: "Info Alert",
      children: "This is an informational alert",
      icon: <Icon path={mdiAlertCircle} size="sm" />,
      onClose: () => null,
    },
    {
      color: "success",
      variant: "solid",
      title: "Success Alert",
      children: "This is a success alert",
      icon: <Icon path={mdiAlertCircle} size="sm" />,
      onClose: () => null,
    },
    {
      color: "error",
      variant: "solid",
      title: "Error Alert",
      children: "This is an error alert",
      icon: <Icon path={mdiAlertCircle} size="sm" />,
      onClose: () => null,
    },
  ],
  [
    {
      color: "primary",
      variant: "solid",
      title: "Info Alert",
      children: "This is an informational alert",
      icon: <Icon path={mdiAlertCircle} size="sm" />,
    },
    {
      color: "success",
      variant: "solid",
      title: "Success Alert",
      children: "This is a success alert",
      icon: <Icon path={mdiAlertCircle} size="sm" />,
    },
    {
      color: "error",
      variant: "solid",
      title: "Error Alert",
      children: "This is an error alert",
      icon: <Icon path={mdiAlertCircle} size="sm" />,
    },
  ],
  [
    {
      color: "primary",
      variant: "solid",
      title: "Info Alert",
      children: "This is an informational alert",
      onClose: () => null,
    },
    {
      color: "success",
      variant: "solid",
      title: "Success Alert",
      children: "This is a success alert",
      onClose: () => null,
    },
    {
      color: "error",
      variant: "solid",
      title: "Error Alert",
      children: "This is an error alert",
      onClose: () => null,
    },
  ],
  [
    {
      color: "primary",
      variant: "solid",
      title: "Info Alert",
      onClose: () => null,
    },
    {
      color: "success",
      variant: "solid",
      title: "Success Alert",
      onClose: () => null,
    },
    {
      color: "error",
      variant: "solid",
      title: "Error Alert",
      onClose: () => null,
    },
  ],
  [
    {
      color: "primary",
      variant: "solid",
      children: "This is an informational alert",
      onClose: () => null,
    },
    {
      color: "success",
      variant: "solid",
      children: "This is a success alert",
      onClose: () => null,
    },
    {
      color: "error",
      variant: "solid",
      children: "This is an error alert",
      onClose: () => null,
    },
  ],
];

const solidRows = defaultRows;

const rowsOutlined: AlertProps[][] = defaultRows.map((row) =>
  row.map((col) => ({ ...col, variant: "outline" }))
);

export function Solid() {
  return solidRows.map((row, index) => (
    <Container
      key={index}
      title={getRowTitle(row)}
      style={{ maxWidth: 400 }}
      rowStyle={{ flexDirection: "column", alignItems: "initial" }}
    >
      {row.map((col, colIndex) => (
        <Alert key={colIndex} {...col} />
      ))}
    </Container>
  ));
}

export function Outline() {
  return rowsOutlined.map((row, index) => (
    <Container
      key={index}
      title={getRowTitle(row)}
      style={{ maxWidth: 400 }}
      rowStyle={{ flexDirection: "column", alignItems: "initial" }}
    >
      {row.map((col, colIndex) => (
        <Alert key={colIndex} {...col} />
      ))}
    </Container>
  ));
}
