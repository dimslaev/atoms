import {
  type HelperPrefix,
  type HelperValue,
  type HelperResposiveValue,
  type Breakpoint,
  type SpacePrefix,
} from "./types";

export const spaceKeys: SpacePrefix[] = [
  "m",
  "mt",
  "mb",
  "ml",
  "mr",
  "mx",
  "my",
  "p",
  "pt",
  "pb",
  "pl",
  "pr",
  "px",
  "py",
];

export const getHelperClasses = (
  prefix: HelperPrefix,
  value: HelperValue | HelperResposiveValue
): string[] => {
  if (typeof value === "string") {
    return [`${prefix}-${value}`];
  }
  return Object.keys(value).map((bp) => {
    if (bp === "initial") {
      return `${prefix}-${value[bp as Breakpoint]}`;
    }
    return `${prefix}-${bp}-${value[bp as Breakpoint]}`;
  });
};
