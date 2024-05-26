import { Label, LabelProps } from "../../src/components/label";
import { Container, getRowTitle } from "../components/story-container";

const defaultRows: LabelProps[][] = [
  [
    {
      size: "sm",
      children: "Label",
    },
    {
      size: "md",
      children: "Label",
    },
    {
      size: "lg",
      children: "Label",
    },
  ],
  [
    {
      size: "sm",
      children: "Label",
      required: true,
    },
    {
      size: "md",
      children: "Label",
      required: true,
    },
    {
      size: "lg",
      children: "Label",
      required: true,
    },
  ],
];

const rows: LabelProps[][] = [
  ...defaultRows,
  ...defaultRows.map((row) => row.map((col) => ({ ...col, error: true }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, success: true }))),
];

export function Default() {
  return rows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Label key={colIndex} id={`radio-${index}-${colIndex}`} {...col} />
      ))}
    </Container>
  ));
}
