import { Chip, ChipProps } from "../../src/components/chip";
import { Icon } from "../../src/components/icon";
import { mdiCloseCircle } from "@mdi/js";
import { Container, getRowTitle } from "../components/story-container";

const defaultChips: ChipProps[][] = [
  [
    {
      size: "sm",
      color: "primary",
      variant: "solid",
      label: "Chip",
    },
    {
      size: "md",
      color: "primary",
      variant: "solid",
      label: "Chip",
    },
    {
      size: "lg",
      color: "primary",
      variant: "solid",
      label: "Chip",
    },
  ],
  [
    {
      size: "sm",
      color: "primary",
      variant: "solid",
      label: "Chip",
    },
    {
      size: "md",
      color: "primary",
      variant: "solid",
      label: "Chip",
    },
    {
      size: "lg",
      color: "primary",
      variant: "solid",
      label: "Chip",
    },
  ],
];

const rows: ChipProps[][] = [
  ...defaultChips,
  ...defaultChips.map((row) =>
    row.map((col) => ({ ...col, color: "success" as const }))
  ),
  ...defaultChips.map((row) =>
    row.map((col) => ({ ...col, color: "error" as const }))
  ),
  ...defaultChips.map((row) =>
    row.map((col) => ({
      ...col,
      onClick: () => null,
      startIcon: <Icon path={mdiCloseCircle} size={col.size} />,
    }))
  ),
  ...defaultChips.map((row) =>
    row.map((col) => ({
      ...col,
      color: "success" as const,
      onClick: () => null,
      startIcon: <Icon path={mdiCloseCircle} size={col.size} />,
    }))
  ),
  ...defaultChips.map((row) =>
    row.map((col) => ({
      ...col,
      color: "error" as const,
      onClick: () => null,
      startIcon: <Icon path={mdiCloseCircle} size={col.size} />,
    }))
  ),
  ...defaultChips.map((row) =>
    row.map((col) => ({
      ...col,
      onClick: () => null,
      startIcon: <Icon path={mdiCloseCircle} size={col.size} />,
      disabled: true,
    }))
  ),
];

const rowsOutlined: ChipProps[][] = rows.map((row) =>
  row.map((col) => ({ ...col, variant: "outline" }))
);

export function Solid() {
  return rows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Chip key={colIndex} {...col} />
      ))}
    </Container>
  ));
}

export function Outline() {
  return rowsOutlined.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Chip key={colIndex} {...col} />
      ))}
    </Container>
  ));
}
