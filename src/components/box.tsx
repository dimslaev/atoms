import { HTMLAttributes, forwardRef, ForwardedRef } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface BoxProps extends HTMLAttributes<HTMLDivElement>, HelperProps {}

export const Box = forwardRef(
  (props: BoxProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { helperClasses, restProps } = useHelperClasses(props);
    const { className } = restProps as Omit<BoxProps, keyof HelperProps>;
    const classes = cn({
      box: true,
      [helperClasses]: !!helperClasses,
      [className as string]: !!className,
    });

    return <div className={classes} {...restProps} ref={ref} />;
  }
);
