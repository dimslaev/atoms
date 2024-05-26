import { Text, TextProps } from "../../src/components/text";
import { Container, getRowTitle } from "../components/story-container";

const defaultRows: TextProps[][] = [
  [
    {
      variant: "h1",
      children: "Heading 1",
    },
    {
      variant: "h2",
      children: "Heading 2",
    },
    {
      variant: "h3",
      children: "Heading 3",
    },
    {
      variant: "h4",
      children: "Heading 4",
    },
    {
      variant: "h5",
      children: "Heading 5",
    },
    {
      variant: "h6",
      children: "Heading 6",
    },
    {
      variant: "p",
      children: "Paragraph",
    },
    {
      variant: "small",
      children: "Small text",
    },
  ],
  [
    {
      variant: "h1",
      as: "div",
      children: "Heading 1 as div",
    },
    {
      variant: "h2",
      as: "div",
      children: "Heading 2 as div",
    },
    {
      variant: "h3",
      as: "div",
      children: "Heading 3 as div",
    },
    {
      variant: "h4",
      as: "div",
      children: "Heading 4 as div",
    },
    {
      variant: "h5",
      as: "div",
      children: "Heading 5 as div",
    },
    {
      variant: "h6",
      as: "div",
      children: "Heading 6 as div",
    },
    {
      variant: "p",
      as: "div",
      children: "Paragraph as div",
    },
    {
      variant: "small",
      as: "div",
      children: "Small as div",
    },
  ],
];

export function Default() {
  return defaultRows.map((row, index) => (
    <Container
      key={index}
      title={getRowTitle(row)}
      rowStyle={{
        flexDirection: "column",
        alignItems: "flex-start",
        gap: undefined,
      }}
    >
      {row.map((col, colIndex) => (
        <Text key={colIndex} {...col} />
      ))}
    </Container>
  ));
}
