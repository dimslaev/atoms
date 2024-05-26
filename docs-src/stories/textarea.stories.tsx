import { Textarea, TextareaProps } from "../../src/components/textarea";
import { Icon } from "../../src/components/icon";
import { mdiStarOutline } from "@mdi/js";
import { Container, getRowTitle } from "../components/story-container";

const defaultRows: TextareaProps[][] = [
  [
    {
      size: "sm",
      placeholder: "Enter text",
    },
    {
      size: "md",
      placeholder: "Enter text",
    },
    {
      size: "lg",
      placeholder: "Enter text",
    },
  ],
  [
    {
      size: "sm",
      defaultValue: "Value",
    },
    {
      size: "md",
      defaultValue: "Value",
    },
    {
      size: "lg",
      defaultValue: "Value",
    },
  ],
  [
    {
      size: "sm",
      startIcon: <Icon path={mdiStarOutline} size="sm" />,
      defaultValue: "Value",
    },
    {
      size: "md",
      startIcon: <Icon path={mdiStarOutline} size="md" />,
      defaultValue: "Value",
    },
    {
      size: "lg",
      startIcon: <Icon path={mdiStarOutline} size="lg" />,
      defaultValue: "Value",
    },
  ],
  [
    {
      size: "sm",
      endIcon: <Icon path={mdiStarOutline} size="sm" />,
      defaultValue: "Value",
    },
    {
      size: "md",
      endIcon: <Icon path={mdiStarOutline} size="md" />,
      defaultValue: "Value",
    },
    {
      size: "lg",
      endIcon: <Icon path={mdiStarOutline} size="lg" />,
      defaultValue: "Value",
    },
  ],
];

const rows: TextareaProps[][] = [
  ...defaultRows,
  ...defaultRows.map((row) => row.map((col) => ({ ...col, error: true }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, success: true }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, disabled: true }))),
];

export function Default() {
  return rows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Textarea key={colIndex} {...col} />
      ))}
    </Container>
  ));
}
