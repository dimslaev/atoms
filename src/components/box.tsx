import React, { forwardRef } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface BoxProps extends HelperProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export type CombineBoxProps<T> = T & BoxProps;

export const Box = forwardRef<HTMLElement, CombineBoxProps<React.HTMLAttributes<HTMLElement>>>(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    const { helperClasses, restProps } = useHelperClasses(props);

    const classes = cn(helperClasses, className);

    return (
      <Component ref={ref} className={classes} {...restProps}>
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";

export type CreateBox<
  T extends React.HTMLAttributes<Element> = React.HTMLAttributes<HTMLDivElement>,
> = CombineBoxProps<T>;

export function createBox<
  T extends React.HTMLAttributes<Element> = React.HTMLAttributes<HTMLDivElement>,
>(defaultProps?: Partial<CreateBox<T>>, defaultElement: React.ElementType = "div") {
  return forwardRef<HTMLElement, CreateBox<T>>((props, ref) => (
    <Box {...defaultProps} {...props} as={props.as || defaultElement} ref={ref} />
  ));
}
