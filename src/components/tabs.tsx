import { HTMLAttributes, ReactNode } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface TabsPrpos extends HTMLAttributes<HTMLDivElement>, HelperProps {
  className?: string;
  children: ReactNode;
}

export const Tabs = (props: TabsPrpos) => {
  const { helperClasses, restProps } = useHelperClasses(props);
  const { className, ...rest } = restProps as Omit<
    TabsPrpos,
    keyof HelperProps
  >;
  const classes = cn({
    tabs: true,
    [helperClasses]: !!helperClasses,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  size?: "md" | "lg" | "sm";
  active?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Tab = (props: TabProps) => {
  const {
    size = "md",
    active = false,
    disabled = false,
    iconOnly = false,
    startIcon,
    endIcon,
    className,
    ...rest
  } = props;

  const classes = cn({
    tab: true,
    [`tab-${size}`]: true,
    ["tab-active"]: active,
    ["tab-disabled"]: disabled,
    ["tab-icon"]: iconOnly,
    ["tab-w-start"]: startIcon,
    ["tab-w-end"]: endIcon,
    [className as string]: !!className,
  });

  return <button className={classes} {...rest} />;
};
