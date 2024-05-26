import { HTMLAttributes } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface TextProps
  extends HTMLAttributes<HTMLSpanElement>,
    HelperProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span" | "div";
}

export const Text = (props: TextProps) => {
  const { helperClasses, restProps } = useHelperClasses(props);
  const {
    className,
    variant = "p",
    as,
    ...rest
  } = restProps as Omit<TextProps, keyof HelperProps>;
  const classes = cn({
    [variant]: true,
    [helperClasses]: !!helperClasses,
    [className as string]: !!className,
  });

  if (!as) {
    if (variant === "h1") return <h1 className={classes} {...rest} />;
    if (variant === "h2") return <h2 className={classes} {...rest} />;
    if (variant === "h3") return <h3 className={classes} {...rest} />;
    if (variant === "h4") return <h4 className={classes} {...rest} />;
    if (variant === "h5") return <h5 className={classes} {...rest} />;
    if (variant === "h6") return <h6 className={classes} {...rest} />;
    if (variant === "p") return <p className={classes} {...rest} />;
    if (variant === "small") return <small className={classes} {...rest} />;
  }

  if (as === "h1") return <h1 className={classes} {...rest} />;
  if (as === "h2") return <h2 className={classes} {...rest} />;
  if (as === "h3") return <h3 className={classes} {...rest} />;
  if (as === "h4") return <h4 className={classes} {...rest} />;
  if (as === "h5") return <h5 className={classes} {...rest} />;
  if (as === "h6") return <h6 className={classes} {...rest} />;
  if (as === "p") return <p className={classes} {...rest} />;
  if (as === "small") return <small className={classes} {...rest} />;
  if (as === "span") return <span className={classes} {...rest} />;
  if (as === "div") return <div className={classes} {...rest} />;

  return null;
};
