import { HTMLAttributes } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface TextProps extends HTMLAttributes<HTMLSpanElement>, HelperProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span" | "div";
}

export const Text = (props: TextProps) => {
  const { helperClasses, restProps } = useHelperClasses(props);
  const { className, variant = "p", as: Element = variant, ...rest } = restProps;

  const classes = cn(variant, helperClasses, className);

  const elementMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    small: "small",
    span: "span",
    div: "div",
  } as const;

  const TagName = elementMap[Element as keyof typeof elementMap] || "span";

  return <TagName className={classes} {...rest} />;
};
