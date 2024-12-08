import React, { forwardRef } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface BaseComponentProps extends HelperProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export type CombineBaseProps<T> = T & BaseComponentProps;

export const BaseComponent = forwardRef<
  HTMLElement,
  CombineBaseProps<React.HTMLAttributes<HTMLElement>>
>(({ as: Component = "div", className, children, ...props }, ref) => {
  const { helperClasses, restProps } = useHelperClasses(props);

  const classes = cn(helperClasses, className);

  return (
    <Component ref={ref} className={classes} {...restProps}>
      {children}
    </Component>
  );
});

BaseComponent.displayName = "BaseComponent";

export type CreateBaseComponent<
  T extends React.HTMLAttributes<Element> = React.HTMLAttributes<HTMLDivElement>,
> = CombineBaseProps<T>;

export function createBaseComponent<
  T extends React.HTMLAttributes<Element> = React.HTMLAttributes<HTMLDivElement>,
>(defaultProps?: Partial<CreateBaseComponent<T>>, defaultElement: React.ElementType = "div") {
  return forwardRef<HTMLElement, CreateBaseComponent<T>>((props, ref) => (
    <BaseComponent {...defaultProps} {...props} as={props.as || defaultElement} ref={ref} />
  ));
}
