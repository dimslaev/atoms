import { Select, SelectProps, SelectOption } from "../../src/components/select";
import { Icon } from "../../src/components/icon";
import { mdiStarOutline } from "@mdi/js";
import { Container, getRowTitle } from "../components/story-container";

const options: SelectOption[] = [
  {
    value: "",
    label: "Pick one option",
  },
  {
    value: "1",
    label: "Option 1",
  },
  {
    value: "2",
    label: "Option 2",
  },
];

const defaultRows: SelectProps[][] = [
  [
    {
      size: "sm",
      options,
    },
    {
      size: "md",
      options,
    },
    {
      size: "lg",
      options,
    },
  ],

  [
    {
      size: "sm",
      options,
      startIcon: <Icon path={mdiStarOutline} size="sm" />,
    },
    {
      size: "md",
      options,
      startIcon: <Icon path={mdiStarOutline} size="md" />,
    },
    {
      size: "lg",
      options,
      startIcon: <Icon path={mdiStarOutline} size="lg" />,
    },
  ],
];

const rows: SelectProps[][] = [
  ...defaultRows,
  ...defaultRows.map((row) => row.map((col) => ({ ...col, error: true }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, success: true }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, disabled: true }))),
];

export function Default() {
  return rows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Select key={colIndex} {...col} />
      ))}
    </Container>
  ));
}
