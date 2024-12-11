import React, { forwardRef } from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}
export type CombineBoxProps<T> = T & BoxProps;
export const Box = forwardRef<HTMLElement, BoxProps>(({ as: Component = "div", ...props }, ref) => {
  return <Component ref={ref} {...props} />;
});

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
