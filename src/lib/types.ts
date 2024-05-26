export type Display = "block" | "none" | "flex";
export type FlexDirection = "row" | "col";
export type FlexAlign = "start" | "center" | "end";
export type FlexJustify = "start" | "center" | "end" | "between";
export type Breakpoint = "initial" | "xs" | "sm" | "md" | "lg";
export type Space = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type SpacePrefix =
  | "m"
  | "mt"
  | "mb"
  | "ml"
  | "mr"
  | "mx"
  | "my"
  | "p"
  | "pt"
  | "pb"
  | "pl"
  | "pr"
  | "px"
  | "py";
export type HelperPrefix =
  | "d"
  | "dir"
  | "align"
  | "justify"
  | "gap"
  | SpacePrefix;
export type HelperValue =
  | Display
  | Space
  | FlexDirection
  | FlexAlign
  | FlexJustify;
export type Responsive<T extends string> = { [key in Breakpoint]?: T };
export type HelperResposiveValue = Responsive<HelperValue>;
export type SpaceProps = {
  [key in SpacePrefix]?: Space | Responsive<Space>;
};
export interface HelperProps extends SpaceProps {
  display?: Display | Responsive<Display>;
  direction?: FlexDirection | Responsive<FlexDirection>;
  align?: FlexAlign | Responsive<FlexAlign>;
  justify?: FlexJustify | Responsive<FlexJustify>;
  gap?: Space | Responsive<Space>;
}
