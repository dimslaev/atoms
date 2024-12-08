import { HTMLAttributes, ReactNode } from "react";
import { createBaseComponent, type CombineBaseProps } from "./base";
import cn from "classnames";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TabsBase = createBaseComponent<TabsProps>();

export const Tabs = ({ className, ...props }: CombineBaseProps<TabsProps>) => {
  return (
    <TabsBase
      className={cn({
        tabs: true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  size?: "md" | "lg" | "sm";
  active?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const TabBase = createBaseComponent<TabProps>({}, "button");

export const Tab = ({
  size = "md",
  active = false,
  disabled = false,
  iconOnly = false,
  startIcon,
  endIcon,
  className,
  ...props
}: CombineBaseProps<TabProps>) => {
  return (
    <TabBase
      className={cn({
        tab: true,
        [`tab-${size}`]: true,
        ["tab-active"]: active,
        ["tab-disabled"]: disabled,
        ["tab-icon"]: iconOnly,
        ["tab-w-start"]: startIcon,
        ["tab-w-end"]: endIcon,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};
