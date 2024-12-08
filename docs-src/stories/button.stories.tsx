import { Button, ButtonProps } from "../../src/components/button";
import { Icon } from "../../src/components/icon";
import { mdiStarOutline } from "@mdi/js";
import { Container, getRowTitle } from "../components/story-container";

const defaultRows: ButtonProps[][] = [
  [
    {
      size: "sm",
      color: "primary",
      variant: "solid",
      startIcon: <Icon path={mdiStarOutline} size="sm" />,
      children: "Click here",
    },
    {
      size: "md",
      color: "primary",
      variant: "solid",
      startIcon: <Icon path={mdiStarOutline} size="md" />,
      children: "Click here",
    },
    {
      size: "lg",
      color: "primary",
      variant: "solid",
      startIcon: <Icon path={mdiStarOutline} size="lg" />,
      children: "Click here",
    },
  ],
  [
    {
      size: "sm",
      color: "primary",
      variant: "solid",
      endIcon: <Icon path={mdiStarOutline} size="sm" />,
      children: "Click here",
    },
    {
      size: "md",
      color: "primary",
      variant: "solid",
      endIcon: <Icon path={mdiStarOutline} size="md" />,
      children: "Click here",
    },
    {
      size: "lg",
      color: "primary",
      variant: "solid",
      endIcon: <Icon path={mdiStarOutline} size="lg" />,
      children: "Click here",
    },
  ],
  [
    {
      size: "sm",
      color: "primary",
      variant: "solid",
      iconOnly: true,
      startIcon: <Icon path={mdiStarOutline} size="sm" />,
    },
    {
      size: "md",
      color: "primary",
      variant: "solid",
      iconOnly: true,
      startIcon: <Icon path={mdiStarOutline} size="md" />,
    },
    {
      size: "lg",
      color: "primary",
      variant: "solid",
      iconOnly: true,
      startIcon: <Icon path={mdiStarOutline} size="lg" />,
    },
  ],
  [
    {
      size: "sm",
      color: "primary",
      variant: "solid",
      iconOnly: true,
      circle: true,
      startIcon: <Icon path={mdiStarOutline} size="sm" />,
    },
    {
      size: "md",
      color: "primary",
      variant: "solid",
      iconOnly: true,
      circle: true,
      startIcon: <Icon path={mdiStarOutline} size="md" />,
    },
    {
      size: "lg",
      color: "primary",
      variant: "solid",
      iconOnly: true,
      circle: true,
      startIcon: <Icon path={mdiStarOutline} size="lg" />,
    },
  ],
];

const rows: ButtonProps[][] = [
  ...defaultRows,
  ...defaultRows.map((row) => row.map((col) => ({ ...col, color: "success" as const }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, color: "error" as const }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, disabled: true }))),
  ...defaultRows.map((row) => row.map((col) => ({ ...col, loading: true }))),
];

const rowsOutlined: ButtonProps[][] = rows.map((row) =>
  row.map((col) => ({ ...col, variant: "outline" }))
);

const rowsText: ButtonProps[][] = rows.map((row) =>
  row.map((col) => ({ ...col, variant: "text" }))
);

export function Solid() {
  return rows.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Button key={colIndex} {...col} />
      ))}
    </Container>
  ));
}

export function Outline() {
  return rowsOutlined.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Button key={colIndex} {...col} />
      ))}
    </Container>
  ));
}

export function Text() {
  return rowsText.map((row, index) => (
    <Container key={index} title={getRowTitle(row)}>
      {row.map((col, colIndex) => (
        <Button key={colIndex} {...col} />
      ))}
    </Container>
  ));
}
