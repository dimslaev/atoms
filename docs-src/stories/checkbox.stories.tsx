import { Checkbox, CheckboxProps } from "../../src/components/checkbox";
import { Container, getRowTitle } from "../components/story-container";

const defaultRows: CheckboxProps[][] = [
  [
    {
      size: "sm",
      label: "Option text",
    },
    {
      size: "md",
      label: "Option text",
    },
    {
      size: "lg",
      label: "Option text",
    },
  ],
  [
    {
      size: "sm",
      label: "Option text",
      defaultChecked: true,
    },
    {
      size: "md",
      label: "Option text",
      defaultChecked: true,
    },
    {
      size: "lg",
      label: "Option text",
      defaultChecked: true,
    },
  ],
  [
    {
      size: "sm",
      label: "Option text",
      disabled: true,
    },
    {
      size: "md",
      label: "Option text",
      disabled: true,
    },
    {
      size: "lg",
      label: "Option text",
      disabled: true,
    },
  ],
  [
    {
      size: "sm",
      label: "Option text",
      defaultChecked: true,
      disabled: true,
    },
    {
      size: "md",
      label: "Option text",
      defaultChecked: true,
      disabled: true,
    },
    {
      size: "lg",
      label: "Option text",
      defaultChecked: true,
      disabled: true,
    },
  ],
];

const rows: CheckboxProps[][] = [
  ...defaultRows,
  ...defaultRows.map((row) => row.map((col) => ({ ...col, error: true }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, success: true }))),
];

export function Default() {
  return rows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Checkbox
          key={`checkbox-${index}-${colIndex}`}
          id={`checkbox-${index}-${colIndex}`}
          {...col}
        />
      ))}
    </Container>
  ));
}
