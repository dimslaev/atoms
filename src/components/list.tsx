import { HTMLAttributes, ReactNode, forwardRef, Children, isValidElement, useMemo } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface IntrinsicListProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  group?: boolean;
  onClose?: () => void;
}
export type ListProps = CombineBoxProps<IntrinsicListProps>;
export const ListBase = createBox<IntrinsicListProps>({}, "ul");
export const List = forwardRef<HTMLElement, ListProps>((props, ref) => {
  const { as, children, className, group, ...rest } = props;

  const classes = cn({
    list: true,
    "list-group": group,
    [className!]: !!className,
  });

  const renderAsDiv = useMemo(() => {
    return Children.toArray(children).some((element) => {
      return isValidElement(element) && (element.props as ListItemProps).as === "a";
    });
  }, [children]);

  return (
    <ListBase ref={ref} as={renderAsDiv ? "div" : as} className={classes} {...rest}>
      {children}
    </ListBase>
  );
});

List.displayName = "List";

export interface IntrinsicListItemProps extends HTMLAttributes<HTMLElement | HTMLAnchorElement> {
  children?: ReactNode;
  group?: boolean;
  selected?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
}
export type ListItemProps = CombineBoxProps<IntrinsicListItemProps>;
export const ListItemBase = createBox<IntrinsicListItemProps>({}, "li");
export const ListItem = forwardRef<HTMLElement, ListItemProps>((props, ref) => {
  const { as, children, group, selected, startIcon, endIcon, onClick, className, ...rest } = props;

  const classes = cn({
    "list-item": true,
    "list-item-group": group,
    "list-item-action": !!onClick || as === "a",
    "list-item-selected": selected,
    [className!]: !!className,
  });

  return (
    <ListItemBase ref={ref} as={as} onClick={onClick} className={classes} {...rest}>
      {group ? (
        <>
          {startIcon && <div className="list-item-icon">{startIcon}</div>}
          <div className="list-item-content">{children}</div>
          {endIcon && <div className="list-item-icon">{endIcon}</div>}
        </>
      ) : (
        children
      )}
    </ListItemBase>
  );
});

ListItem.displayName = "ListItem";
