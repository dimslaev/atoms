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
  prefix: HelperPrefix | null,
  value: HelperValue | HelperResposiveValue
): string[] => {
  if (typeof value === "string") {
    if (prefix) {
      return [`${prefix}-${value}`];
    }
    return [`${value}`];
  }
  return Object.keys(value).map((bp) => {
    if (bp === "initial") {
      if (prefix) {
        return `${prefix}-${value[bp as Breakpoint]}`;
      }
      return `${value[bp as Breakpoint]}`;
    }
    if (prefix) {
      return `${prefix}-${bp}-${value[bp as Breakpoint]}`;
    }
    return `${bp}-${value[bp as Breakpoint]}`;
  });
};
