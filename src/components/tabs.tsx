import { HTMLAttributes, ReactNode } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface IntrinsicTabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export type TabsProps = CombineBoxProps<IntrinsicTabsProps>;
export const TabsBase = createBox<IntrinsicTabsProps>({}, "div");
export const Tabs = ({ className, children, ...props }: TabsProps) => {
  return (
    <TabsBase
      className={cn({
        tabs: true,
        [className!]: !!className,
      })}
      {...props}
    >
      <div className="tabs-inner">{children}</div>
    </TabsBase>
  );
};

export interface IntrinsicTabProps extends HTMLAttributes<HTMLButtonElement> {
  size?: "md" | "lg" | "sm";
  active?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
export type TabProps = CombineBoxProps<IntrinsicTabProps>;
export const TabBase = createBox<IntrinsicTabProps>({}, "button");
export const Tab = ({
  size = "md",
  active = false,
  disabled = false,
  iconOnly = false,
  startIcon,
  endIcon,
  children,
  className,
  ...props
}: CombineBoxProps<TabProps>) => {
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
    >
      {startIcon}
      <div className="tab-label">{children}</div>
      {endIcon}
    </TabBase>
  );
};
