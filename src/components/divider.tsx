import { HTMLAttributes } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface DividerProps
  extends HTMLAttributes<HTMLSpanElement>,
    HelperProps {}

export const Divider = (props: DividerProps) => {
  const { helperClasses, restProps } = useHelperClasses(props);
  const { className, ...rest } = restProps as Omit<
    DividerProps,
    keyof HelperProps
  >;
  const classes = cn({
    divider: true,
    [helperClasses]: !!helperClasses,
    [className as string]: !!className,
  });

  return <hr className={classes} {...rest} />;
};
