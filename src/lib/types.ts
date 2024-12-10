export type Display = "block" | "hidden" | "flex";
export type FlexDirection = "row" | "col";
export type FlexItems = "start" | "center" | "end";
export type FlexJustify = "start" | "center" | "end" | "between";
export type Breakpoint = "initial" | "xs" | "sm" | "md" | "lg";
export type Space = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "auto";
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
export type HelperPrefix = "flex" | "items" | "justify" | "gap" | SpacePrefix;
export type HelperValue = Display | Space | FlexDirection | FlexItems | FlexJustify;
export type Responsive<T extends string> = { [key in Breakpoint]?: T };
export type HelperResposiveValue = Responsive<HelperValue>;
export type SpaceProps = {
  [key in SpacePrefix]?: Space | Responsive<Space>;
};
export interface HelperProps extends SpaceProps {
  display?: Display | Responsive<Display>;
  flex?: FlexDirection | Responsive<FlexDirection>;
  items?: FlexItems | Responsive<FlexItems>;
  justify?: FlexJustify | Responsive<FlexJustify>;
  gap?: Space | Responsive<Space>;
}
